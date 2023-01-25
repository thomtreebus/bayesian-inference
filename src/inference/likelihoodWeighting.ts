import { partialObject } from "ramda";
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
        const probability = network[nodeName].cpt;
        console.log(probability);
        // weight = weight * probability;
      } else {
      }
    }
    i = i + 1;
  }
  return {
    sample: sample,
    weigh: weight,
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
  weightedSample(network, observedValues);
  return likelihoodWeighting(network, queryNodes, 10, observedValues);
};
