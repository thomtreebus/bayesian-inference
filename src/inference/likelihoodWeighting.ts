import { partialObject } from "ramda";
const Chance = require("chance");
const chance = new Chance();

import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
} from "../types";

function weightedSample(network: Network, observedValues: Combinations) {
  const sample = Object.assign({}, observedValues);
  let weight = 1;
  let acc = 0;
  // this is not being created properly -> length of parentValues needs to be
  // equal to number of parents that node has.

  for (const [nodeName, node] of Object.entries(network)) {
    // const parentValues: Boolean[] = [];
    // if (node.parents.length > 0) {
    //   // const parentValues: Boolean[] = [];
    //   for (const p of parents) {
    //     if (sample[p] === "T") {
    //       parentValues.push(true);
    //     }
    //   }
    //   // console.log(parents);
    //   // console.log(parentValues);
    //   for (const [j, value] of parentValues.entries()) {
    //     const exp = parentValues.length - j - 1;
    //     acc = value ? 2 ** exp : 0;
    //     // acc = value * 2 ** exp;
    //   }
    //   // console.log(parentValues, acc);
    // }
    const parents = node.parents;
    let parentsValues = "";
    for (let parent of parents) {
      if (sample[parent] === "T") {
        parentsValues = parentsValues.concat("1");
      } else {
        parentsValues = parentsValues.concat("0");
      }
    }
    if (parentsValues) {
      acc = parseInt(parentsValues, 2);
    }

    // console.log(parentsValues, acc);
    // console.log(observedValues);
    if (nodeName in observedValues) {
      // Xi is an evidence variable with value xi in observedValues
      let probability = 0;
      if (parents.length > 0) {
        // node with parents
        const cpt = network[nodeName].cpt as CptWithParents;
        probability =
          observedValues[nodeName] === "T"
            ? cpt[cpt.length - acc - 1].probability.T
            : cpt[cpt.length - acc - 1].probability.F;
      } else {
        // node without parents
        const cpt = network[nodeName].cpt as CptWithoutParents;
        probability = observedValues[nodeName] === "T" ? cpt.T : cpt.F;
      }
      weight = weight * probability;
    } else {
      // generate random sample from P(Xi | parents(Xi))
      // random value between 0 and 1
      let random = chance.floating({ min: 0, max: 1 });
      let probability = 0;
      if (parents.length > 0) {
        const cpt = network[nodeName].cpt as CptWithParents;
        // console.log(parentValues);
        // console.log(cpt[acc]);
        probability = cpt[cpt.length - acc - 1].probability.T;
        // console.log(nodeName, probability);
      } else {
        const cpt = network[nodeName].cpt as CptWithoutParents;
        probability = cpt.T;
      }
      // create random sample for node
      sample[nodeName] = random <= probability ? "T" : "F";
      // console.log(random, probability, sample[nodeName]);
    }

    for (const value of Object.entries(observedValues)) {
      // console.log("value", value);
      if (node.id === value[0] && node.states.includes(value[1])) {
      }
    }
  }
  // console.log(sample, observedValues);
  return {
    sample: sample,
    weight: weight,
  };
}

function likelihoodWeighting(
  network: Network,
  query: Combinations,
  sampleSize: number,
  observedValues: Combinations
): number {
  // a vector of weighted counts for each value of X, initially zero
  let totalWeight = 0;
  let consistentQueryWeight = 0;
  for (let i = 0; i < sampleSize; i++) {
    const { sample, weight } = weightedSample(network, observedValues);
    totalWeight += weight;
    if (sampleConsistentWithQuery(sample, query)) {
      consistentQueryWeight += weight;
    }
  }
  return consistentQueryWeight / totalWeight;
}

export const infer: Infer = (
  network: Network,
  query: Combinations = {},
  observedValues: Combinations
) => {
  const likelihood = likelihoodWeighting(
    network,
    query,
    100000,
    observedValues
  );
  return likelihood;
};

function sampleConsistentWithQuery(
  sample: Combinations,
  query: Combinations
): Boolean {
  for (const [node, value] of Object.entries(query)) {
    if (value !== sample[node]) {
      return false;
    }
  }
  return true;
}

function normalize(weights: number[]): number[] {
  let sum = 0;
  for (var weight of weights) {
    sum += weight;
  }
  for (let i = 0; i < weights.length; i++) {
    weights[i] /= sum;
  }
  return weights;
}
