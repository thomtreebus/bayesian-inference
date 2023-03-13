const _ = require("lodash");
import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
  Factor,
  FactorItem,
} from "../types";
import { isNil } from "ramda";
import { hasNoParents } from "../utils/network";

export const infer: Infer = (
  network: Network,
  query: Combinations = {},
  observedValues: Combinations,
  sampleSize: number = 0
): number => {
  const variables = Object.keys(network);
  const variablesToInfer = Object.keys(query);
  const hiddenVariables = variables
    .filter((v) => v !== variablesToInfer[0])
    .filter((hiddenVar) => !observedValues?.[hiddenVar]);

  const factors = variables.map((nodeId) =>
    createFactor(network[nodeId], observedValues)
  );

  const remainingFactors = eliminateVariables(factors, hiddenVariables);

  const joinedFactor = remainingFactors
    .filter((factor) => factor.length > 0)
    .reduce(joinFactors);

  const normalizedFactor = normalizeFactor(joinedFactor);

  const inferenceRow = normalizedFactor.find((row) =>
    variablesToInfer.every((v) => row.combination[v] === query[v])
  );

  return inferenceRow?.value ?? 0;
};

/**
 * Eliminate variables from a factor by summing them out
 * @param factors factors to eliminate from
 * @param variablesToEliminate variables to eliminate
 * @returns factors with variables eliminated
 */
function eliminateVariables(factors: Factor[], variablesToEliminate: string[]) {
  for (const varToEliminate of variablesToEliminate) {
    const factorsToJoin = factors.filter((factor) =>
      Object.keys(factor[0].combination).some(
        (nodeId) => nodeId === varToEliminate
      )
    );

    const factorWithoutVariable = sumOutVariable(
      factorsToJoin.reduce((factor1, factor2) => joinFactors(factor1, factor2)),
      varToEliminate
    );

    factors = removeFactorsToJoin(factorsToJoin, factors);
    factors.push(factorWithoutVariable);
  }
  return factors;
}

/**
 * Remove all factors to join from a list of factors
 * @param factorsToJoin array of factors to remove
 * @param factors factors to remove from
 * @returns factors with factorsToJoin removed
 */
function removeFactorsToJoin(factorsToJoin: Factor[], factors: Factor[]) {
  for (const factorToJoin of factorsToJoin) {
    factors = removeFactor(factors, factorToJoin);
  }
  return factors;
}

/**
 * Remove a factor from a list of factors
 * @param factors array of factors to remove from
 * @param factorToRemove factor to remove
 * @returns factors with the factorToRemoved removed from the list
 */
function removeFactor(factors: Factor[], factorToRemove: Factor): Factor[] {
  const index = factors.indexOf(factorToRemove);
  if (index > -1) {
    factors.splice(index, 1);
  }
  return factors;
}

/**
 * Build a factor for a given node. If observed values have been provided,
 * then only those will be included in the factor.
 * @param node node to create factor for
 * @param observedValues values that have been observed
 * @returns a factor with the combinations of states and corresponding values
 */
function createFactor(node: Node, observedValues?: Combinations): Factor {
  const factor: any[] = [];
  if (hasNoParents(node)) {
    addFactorWithoutParents(node, factor);
  } else {
    addFactorWithParents(node, factor);
  }

  if (observedValues) {
    removeUnobservedValuesFromFactor(observedValues, factor);
  }
  return factor;
}

/**
 * Add a factor from a node with parents
 * @param node node with parents
 * @param factor factor to add to
 */
function addFactorWithParents(node: Node, factor: any[]) {
  const cpt = node.cpt as CptWithParents;

  for (let i = 0; i < cpt.length; i++) {
    for (let j = 0; j < node.states.length; j++) {
      const state = node.states[j];

      factor.push({
        combination: { ...cpt[i].condition, [node.id]: state },
        value: cpt[i].probability[state],
      });
    }
  }
}

/**
 * Add a factor from a node without any parents
 * @param node node without parents
 * @param factor factor to add to
 */
function addFactorWithoutParents(node: Node, factor: any[]) {
  const cpt = node.cpt as CptWithoutParents;

  for (let i = 0; i < node.states.length; i++) {
    const state = node.states[i];

    factor.push({
      combination: { [node.id]: state },
      value: cpt[state],
    });
  }
}
/**
 * Remove all combinations with values that haven't been observed from a factor
 * @param observedValues values that have been observed
 * @param factor factor to remove from
 */
function removeUnobservedValuesFromFactor(
  observedValues: Combinations,
  factor: any[]
) {
  const observedIds = Object.keys(observedValues);

  for (let i = factor.length - 1; i >= 0; i--) {
    for (const id of observedIds) {
      if (
        factor[i].combination[id] &&
        factor[i].combination[id] !== observedValues[id]
      ) {
        factor.splice(i, 1);
        break;
      }
    }
  }
}

function joinFactors(factor1: Factor, factor2: Factor): Factor {
  const newFactor: any[] = [];

  for (const row1 of factor1) {
    for (const row2 of factor2) {
      const combination = {
        ...row1.combination,
        ...row2.combination,
      };

      if (!combinationExistsInFactor(combination, newFactor)) {
        newFactor.push({ combination, value: 0 });
      }
    }
  }

  updateFactorValues(factor1, factor2, newFactor);
  return newFactor;
}

/**
 * Check if a combination exists in a factor
 * @param combination combination to check for
 * @param factor factor to check for
 * @returns true if combination exists in factor
 */
function combinationExistsInFactor(
  combination: { [x: string]: string },
  factor: any[]
) {
  for (const row of factor) {
    if (_.isEqual(row.combination, combination)) {
      return true;
    }
  }
  return false;
}

/**
 * Update the values of a new factor, given two factors that are
 * being joined
 * @param factor1 first factor being joined
 * @param factor2 second factor being joined
 * @param factor factor to update values for
 */
function updateFactorValues(factor1: Factor, factor2: Factor, factor: any[]) {
  factor.forEach((row) => {
    const rowF1 = findRow(factor1, row);
    const rowF2 = findRow(factor2, row);
    row.value = rowF1.value * rowF2.value;
  });
}
/**
 * Find a row in a factor that equals to a row in another factor
 * @param factor original factor
 * @param row factor to compare with
 * @returns row that corresponds to row in factor
 */
function findRow(factor: Factor, row: any): FactorItem {
  const nodeIds = Object.keys(factor[0].combination);

  const factorRow = factor.find((x) =>
    nodeIds.every((nodeId) => x.combination[nodeId] === row.combination[nodeId])
  );
  return factorRow as unknown as FactorItem;
}

/**
 * Sum out a variable from a factor
 * @param factor factor to sum the variable out of
 * @param nodeId id of the node/variable to sum out
 * @returns new factor that doesn't contain the variable
 */
function sumOutVariable(factor: Factor, nodeId: string): Factor {
  const newFactor = [];
  for (let i = 0; i < factor.length; i++) {
    const currentFactor = factor[i];

    let newStates: any = {}; // states without the variable to sum out
    Object.keys(currentFactor.combination).forEach((variable) => {
      if (variable !== nodeId)
        newStates[variable] = currentFactor.combination[variable];
    });

    let existingRow;
    for (const row of newFactor) {
      if (_.isEqual(row.combination, newStates)) {
        existingRow = row;
        break;
      }
    }

    if (existingRow) {
      existingRow.value += factor[i].value;
    } else {
      newFactor.push({
        combination: newStates,
        value: currentFactor.value,
      });
    }
  }
  return newFactor;
}

/**
 * Normalize a factor
 * @param factor factor to normalize
 * @returns normalized factor
 */
function normalizeFactor(factor: Factor): Factor {
  let total = 0;
  for (let i = 0; i < factor.length; i++) {
    total += factor[i].value;
  }

  if (total === 0) {
    return factor;
  }

  for (const row of factor) {
    row.value = row.value / total;
  }

  return factor;
}
