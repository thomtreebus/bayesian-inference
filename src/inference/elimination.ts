const _ = require("lodash");
import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
  Factor,
} from "../types";

export const infer: Infer = (
  network: Network,
  query: Combinations = {},
  observedValues: Combinations,
  sampleSize: number = 0
) => {
  const variables = Object.keys(network);
  const variablesToInfer = Object.keys(query);
  const variablesObservedValues = observedValues
    ? Object.keys(observedValues)
    : [];

  const variablesToEliminate = variables.filter(
    (x) =>
      !variablesToInfer.some((y) => y === x) &&
      !variablesObservedValues.some((y) => y === x)
  );

  const factors = eliminateVariables(
    variables,
    network,
    observedValues,
    variablesToEliminate
  );

  const joinedFactor = factors
    .filter((factor) => Object.keys(factor[0].states).length > 0)
    .sort((f1, f2) => f1.length - f2.length)
    .reduce((f1, f2) => joinFactors(f1, f2));

  const normalizedFactor = normalizeFactor(joinedFactor);

  const inferenceRow = normalizedFactor.find((row) =>
    variablesToInfer.every((v) => row.states[v] === query[v])
  );

  if (inferenceRow === undefined) {
    return 0;
  }

  return inferenceRow.value;
};

function eliminateVariables(
  variables: string[],
  network: Network,
  observedValues: Combinations,
  variablesToEliminate: string[]
) {
  let factors = variables.map((nodeId) =>
    buildFactor(network[nodeId], observedValues)
  );

  for (const varToEliminate of variablesToEliminate) {
    const factorsToJoin = factors.filter((factor) =>
      Object.keys(factor[0].states).some((nodeId) => nodeId === varToEliminate)
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
function buildFactor(node: Node, observedValues?: Combinations): Factor {
  const factor: any[] = [];

  if (node.parents.length === 0) {
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
        states: { ...cpt[i].condition, [node.id]: state },
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
      states: { [node.id]: state },
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
  console.log("observed", observedValues);
  console.log("before", factor);

  for (let i = factor.length - 1; i >= 0; i--) {
    for (let j = 0; j < observedIds.length; j++) {
      const givingId = observedIds[j];

      if (
        factor[i].states[givingId] &&
        factor[i].states[givingId] !== observedValues[givingId]
      ) {
        factor.splice(i, 1);
        break;
      }
    }
  }
  console.log("after", factor);
}

function joinFactors(f1: Factor, f2: Factor): Factor {
  const newFactor: any[] = [];

  for (let i = 0; i < f1.length; i++) {
    for (let j = 0; j < f2.length; j++) {
      const states = {
        ...f1[i].states,
        ...f2[j].states,
      };

      let rowAlreadyExists = false;
      for (const row of newFactor) {
        if (_.isEqual(row.states, states)) {
          rowAlreadyExists = true;
        }
      }

      if (!rowAlreadyExists) {
        newFactor.push({ states, value: 0 });
      }
    }
  }

  const nodeIdsF1 = Object.keys(f1[0].states);
  const nodeIdsF2 = Object.keys(f2[0].states);
  for (let i = 0; i < newFactor.length; i++) {
    const rowNewFactor = newFactor[i];

    const rowF1 = findRow(f1, nodeIdsF1, rowNewFactor);
    const rowF2 = findRow(f2, nodeIdsF2, rowNewFactor);
    if (rowF1 === undefined || rowF2 === undefined) {
      throw new Error("Error while joining factors");
    }

    rowNewFactor.value = rowF1.value * rowF2.value;
  }
  return newFactor;
}

function findRow(factor: Factor, nodeIds: string[], rowNewFactor: any) {
  return factor.find((x) =>
    nodeIds.every((nodeId) => x.states[nodeId] === rowNewFactor.states[nodeId])
  );
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
    for (const variable of Object.keys(currentFactor.states)) {
      if (variable !== nodeId) {
        newStates[variable] = currentFactor.states[variable];
      }
    }

    let existingRow;
    for (const row of newFactor) {
      if (_.isEqual(row.states, newStates)) {
        existingRow = row;
        break;
      }
    }

    if (existingRow === undefined) {
      newFactor.push({
        states: newStates,
        value: currentFactor.value,
      });
    } else {
      existingRow.value += factor[i].value;
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