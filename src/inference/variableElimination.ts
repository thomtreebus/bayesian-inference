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

function eliminateVariables(factors: Factor[], variablesToEliminate: string[]) {
  return variablesToEliminate.reduce((acc, varToEliminate) => {
    const factorsToJoin = acc.filter((factor) =>
      Object.keys(factor[0].combination).includes(varToEliminate)
    );

    const factorWithoutVariable = sumOutVariable(
      factorsToJoin.reduce(joinFactors),
      varToEliminate
    );

    return acc
      .filter((factor) => !factorsToJoin.includes(factor))
      .concat(factorWithoutVariable);
  }, factors);
}

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

function addFactorWithParents(node: Node, factor: any[]) {
  const cpt = node.cpt as CptWithParents;

  for (const { condition, probability } of cpt) {
    for (const state of node.states) {
      factor.push({
        combination: { ...condition, [node.id]: state },
        value: probability[state],
      });
    }
  }
}

function addFactorWithoutParents(node: Node, factor: any[]) {
  const cpt = node.cpt as CptWithoutParents;

  for (const state of node.states) {
    factor.push({
      combination: { [node.id]: state },
      value: cpt[state],
    });
  }
}

// function removeUnobservedValuesFromFactor(
//   observedValues: Combinations,
//   factor: any[]
// ) {
//   _.remove(factor, (row) => {
//     return !_.every(observedValues, (value, variable) => {
//       return row.combination[variable] === value;
//     });
//   });
// }

// function joinFactors(factor1: Factor, factor2: Factor): Factor {
//   const joinedFactor = [];

//   for (const row1 of factor1) {
//     for (const row2 of factor2) {
//       const combination = { ...

function removeUnobservedValuesFromFactor(
  observedValues: Combinations,
  factor: any[]
) {
  for (let i = 0; i < factor.length; i++) {
    const combination = factor[i].combination;
    const unobservedVariables = Object.keys(combination).filter(
      (v) => !observedValues.hasOwnProperty(v)
    );
    if (unobservedVariables.length > 0) {
      continue;
    }
    for (const observedVar of Object.keys(observedValues)) {
      if (combination[observedVar] !== observedValues[observedVar]) {
        return factor.splice(i--, 1);
      }
    }
  }
}

/**

    Normalize a factor so that the sum of the values is 1
    @param factor factor to normalize
    @returns the normalized factor
    */
function normalizeFactor(factor: Factor) {
  const sum = factor.reduce((sum, row) => sum + row.value, 0);
  return factor.map((row) => ({ ...row, value: row.value / sum }));
}

/**

    Join two factors by multiplying all rows that have matching combinations
    @param factor1 first factor
    @param factor2 second factor
    @returns the joined factor
    */
function joinFactors(factor1: Factor, factor2: Factor) {
  const joinedFactor: any[] = [];
  for (const row1 of factor1) {
    for (const row2 of factor2) {
      const combinationsMatch = Object.keys(row1.combination).every(
        (key) => row1.combination[key] === row2.combination[key]
      );
      if (combinationsMatch) {
        joinedFactor.push({
          combination: { ...row1.combination, ...row2.combination },
          value: row1.value * row2.value,
        });
      }
    }
  }
  return joinedFactor;
}

/**

    Sum out a variable from a factor by summing up rows that have the same combination except for the variable to sum out
    @param factor factor to sum out variable from
    @param variableToSumOut variable to sum out
    @returns factor with variable summed out
    */
function sumOutVariable(factor: Factor, variableToSumOut: string) {
  const summedOutFactor: any[] = [];

  const rowsWithVariable = factor.filter((row) =>
    Object.keys(row.combination).includes(variableToSumOut)
  );
  const rowsWithoutVariable = factor.filter(
    (row) => !Object.keys(row.combination).includes(variableToSumOut)
  );

  const groups: [] = _.groupBy(rowsWithVariable, (row: FactorItem) =>
    _.omit(row.combination, variableToSumOut)
  );

  for (const [combination, group] of Object.entries(groups)) {
    const value = group.reduce((sum, row) => sum + row.value, 0);
    summedOutFactor.push({
      combination: { ...JSON.parse(combination) },
      value: value,
    });
  }

  return joinFactors(rowsWithoutVariable, summedOutFactor);
}
