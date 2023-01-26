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
        let random = chance.floating({ min: 0, max: 1 });
        let probability = 0;
        if (node.parents.length > 0) {
          const cpt = network[nodeName].cpt as CptWithParents;
          probability = cpt[acc].probability.T;
        } else {
          const cpt = network[nodeName].cpt as CptWithoutParents;
          probability = cpt.T;
        }
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
): number {
  const W: number[] = [];
  W.push(0);
  console.log(W);

  return 0;
}

export const infer: Infer = (
  network: Network,
  queryNodes: Combinations = {},
  observedValues: Combinations
) => {
  for (let i = 0; i < 10; i++) {
    const { sample, weight } = weightedSample(network, observedValues);
    console.log("weighted sample", sample, weight);
  }

  return likelihoodWeighting(network, queryNodes, 10, observedValues);
};
