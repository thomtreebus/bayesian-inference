const _ = require("lodash");
import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
} from "../types";
import { isNil } from "ramda";
import { hasNoParents } from "../utils/network";

interface FactorRow {
  combination: Combinations;
  value: number;
}

type Factor = FactorRow[];

export const infer: Infer = (
  network: Network,
  query: Combinations = {},
  observedValues: Combinations,
  sampleSize: number = 0
): number => {
  const variables = Object.keys(network);
  const variablesToInfer = Object.keys(query);

  const factors = variables.map((nodeId) =>
    createFactor(network[nodeId], observedValues)
  );

  const eliminationOrdering = minimumDegreeEliminationOrdering(
    factors,
    variables
  );

  const hiddenVariables = eliminationOrdering
    .filter((v) => v !== variablesToInfer[0])
    .filter((hiddenVar) => !observedValues?.[hiddenVar]);

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
 * Compute an elimination ordering using the minimum degree heuristic.
 *
 * @param factors - The factors in the network.
 * @param variables - The variables in the network.
 * @returns An elimination ordering for the variables.
 */
function minimumDegreeEliminationOrdering(
  factors: Factor[],
  variables: string[]
): string[] {
  const adjList: Record<string, Set<string>> = createAdjList(
    variables,
    factors
  );

  const degrees: Record<string, number> = {}; // initialize empty degrees object

  // compute degree for each variable
  variables.forEach((variable) => {
    degrees[variable] = adjList[variable].size;
  });

  const ordering: string[] = []; // initialize empty ordering array

  while (variables.length > 0) {
    let minDegree = Infinity;
    let minVar: string = "";

    // find variable with minimum degree
    variables.forEach((variable) => {
      if (degrees[variable] < minDegree) {
        minDegree = degrees[variable];
        minVar = variable;
      }
    });

    // add variable to ordering and update degrees
    ordering.push(minVar);
    variables.splice(variables.indexOf(minVar), 1);
    adjList[minVar].forEach((neighbor) => {
      degrees[neighbor]--;
    });
  }

  return ordering;
}

/**
 * Create an adjacency list for the variables of a Bayesian network
 * populate the list with the factors from each variable
 * @param variables variables in a network
 * @param factors factors in a network
 * @returns the adjacency list
 */
function createAdjList(variables: string[], factors: Factor[]) {
  const adjList: Record<string, Set<string>> = {}; // initialize empty adjacency list

  // initialize empty set for each variable
  variables.forEach((variable) => {
    adjList[variable] = new Set<string>();
  });
  // populate adjacency list by iterating over variables and factors
  variables.forEach((variable) => {
    adjList[variable] = new Set<string>();
    factors.forEach((factor) => {
      if (factor[0].combination.hasOwnProperty(variable)) {
        Object.keys(factor[0].combination).forEach((otherVar) => {
          if (otherVar !== variable) {
            adjList[variable].add(otherVar);
            adjList[otherVar].add(variable);
          }
        });
      }
    });
  });
  return adjList;
}

/**
 * Eliminate variables from a factor by summing them out
 *
 * @param factors factors to eliminate from
 * @param variablesToEliminate variables to eliminate
 * @returns factors with variables eliminated
 */
function eliminateVariables(factors: Factor[], variablesToEliminate: string[]) {
  for (const varToEliminate of variablesToEliminate) {
    const factorsToJoin = factors.filter((factor) =>
      Object.keys(factor[0].combination).includes(varToEliminate)
    );

    const factorWithoutVariable = sumOutVariable(
      factorsToJoin.reduce(joinFactors),
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
  let factor: any[] = hasNoParents(node)
    ? addFactorWithoutParents(node)
    : addFactorWithParents(node);

  if (observedValues) {
    factor = removeUnobservedValuesFromFactor(observedValues, factor);
  }
  return factor;
}

/**
 * Add a factor from a node with parents
 * @param node node with parents
 * @param factor factor to add to
 */
function addFactorWithParents(node: Node): Factor {
  const cpt = node.cpt as CptWithParents;
  return cpt.flatMap(({ condition, probability }) =>
    node.states.map((state) => ({
      combination: { ...condition, [node.id]: state },
      value: probability[state],
    }))
  );
}

/**
 * Add a factor from a node without any parents
 * @param node node without parents
 * @param factor factor to add to
 */
function addFactorWithoutParents(node: Node): Factor {
  const cpt = node.cpt as CptWithoutParents;
  return node.states.map((state) => ({
    combination: { [node.id]: state },
    value: cpt[state],
  }));
}

/**
 * Remove all combinations with values that haven't been observed from a factor
 * @param observedValues values that have been observed
 * @param factor factor to remove from
 */
function removeUnobservedValuesFromFactor(
  observedValues: Combinations,
  factor: Factor
): Factor {
  const observedIds = Object.keys(observedValues);
  return factor.filter((row) =>
    observedIds.every(
      (id) => !row.combination[id] || row.combination[id] === observedValues[id]
    )
  );
}

/**
 * Join two factors together by matching the variables they share
 *
 * Assumes that the two input factors are consistent, i.e., they share
 * the same set of variables and the same values for those variables. The resulting factor
 * will also be consistent with the inputs.
 *
 * Resulting factor will have all the variables from the input
 * factors except the shared ones.
 *
 * @param factor1 first factor to be joined.
 * @param factor2 second factor to be joined.
 * @returns new factor obtained by joining factor1 and factor2
 */
function joinFactors(factor1: Factor, factor2: Factor): Factor {
  const newFactor: Factor = [];

  const combinations = factor1.flatMap((row1) =>
    factor2.map((row2) => Object.assign({}, row1.combination, row2.combination))
  );

  combinations.forEach((combination) => {
    if (!combinationExistsInFactor(combination, newFactor)) {
      newFactor.push({ combination, value: 0 });
    }
  });

  updateFactorValues(factor1, factor2, newFactor);
  return newFactor;
}

/**
 * Check if a combination exists in a factor
 * @param combination combination to check for
 * @param factor factor to check for
 * @returns true if combination exists in factor
 */
function combinationExistsInFactor(combination: Combinations, factor: any[]) {
  return factor.some((row) =>
    Object.entries(combination).every(
      ([key, value]) => row.combination[key] === value
    )
  );
}

/**
 * Update the values of a new factor, given two factors that are
 * being joined
 *
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
 *
 * @param factor original factor
 * @param row factor to compare with
 * @returns row that corresponds to row in factor
 */
function findRow(factor: Factor, row: any): FactorRow {
  const nodeIds = Object.keys(factor[0].combination);

  const factorRow = factor.find((x) =>
    nodeIds.every((nodeId) => x.combination[nodeId] === row.combination[nodeId])
  );
  return factorRow as unknown as FactorRow;
}

/**
 * Sum out a variable from a factor
 *
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
 * Normalize the given factor by dividing each value by the sum of all values
 *
 * Resulting factor will have the same variables as the input factor, but
 * with normalized values
 *  *
 * @param factor factor to be normalized
 * @returns normalized factor, with all values summing to 1
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
