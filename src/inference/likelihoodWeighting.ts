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
  const sample = observedValues;
  let weight = 1;
  // console.log(observedValues["BURGLARY"]);

  let i = 0;
  for (const [nodeName, node] of Object.entries(network)) {
    const parents = node.parents;
    const parentValues: Boolean[] = [];
    for (const p of parents) {
      if (sample[p] === "T") {
        parentValues.push(true);
      }
    }

    let acc = 0;
    let j = 0;
    for (let value of parentValues) {
      const exp = parentValues.length - j - 1;
      acc = value ? 2 ** exp : 0;
      j += 1;
    }

    for (const value of Object.entries(observedValues)) {
      if (node.id === value[0] && node.states.includes(value[1])) {
        let probability = 0;
        if (node.parents.length > 0) {
          const cpt = network[nodeName].cpt as CptWithParents;
          probability =
            value[1] === "T" ? cpt[acc].probability.T : cpt[acc].probability.F;
        } else {
          const cpt = network[nodeName].cpt as CptWithoutParents;
          probability = value[1] === "T" ? cpt.T : cpt.F;
        }
        weight = weight * probability;
      } else {
        // random value between 0 and 1
        let random = chance.floating({ min: 0, max: 1 });
        let probability = 0;
        if (node.parents.length > 0) {
          const cpt = network[nodeName].cpt as CptWithParents;
          probability = cpt[acc].probability.T;
        } else {
          const cpt = network[nodeName].cpt as CptWithoutParents;
          probability = cpt.T;
        }
        // create random sample for node
        sample[nodeName] = random <= probability ? "T" : "F";
      }
    }
    i = i + 1;
  }
  return {
    sample: sample,
    weight: weight,
  };
}

function likelihoodWeighting(
  network: Network,
  queryNodes: Combinations,
  sampleSize: number,
  observedValues: Combinations
): number[] {
  // a vector of weighted counts for each value of X, initially zero
  const weights: number[] = [0, 0];
  for (let i = 0; i < sampleSize; i++) {
    const { sample, weight } = weightedSample(network, observedValues);
    const query = Object.entries(queryNodes)[0];
    if (sample[query[0]] === "F") {
      weights[0] = weights[0] + weight;
    } else {
      weights[1] = weights[1] + weight;
    }
  }
  console.log("raw weights", weights);
  const sum = weights[0] + weights[1];
  weights[0] = weights[0] / sum;
  weights[1] = weights[1] / sum;
  console.log("weights", weights);
  // return weights / sum;
  return weights;
}

export const infer: Infer = (
  network: Network,
  queryNodes: Combinations = {},
  observedValues: Combinations
) => {
  // for (let i = 0; i < 10; i++) {
  //   const { sample, weight } = weightedSample(network, observedValues);
  //   console.log("weighted sample", sample, weight);
  // }

  const likelihood = likelihoodWeighting(
    network,
    queryNodes,
    50000,
    observedValues
  );
  if (Object.entries(queryNodes)[0][1] == "T") {
    return likelihood[1];
  } else {
    return likelihood[0];
  }
};
