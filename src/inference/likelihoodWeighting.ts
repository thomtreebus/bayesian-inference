const Chance = require("chance");
const chance = new Chance();
const _ = require("lodash");

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
  let index = 0;

  for (const [nodeName, node] of Object.entries(network)) {
    const parents = node.parents;
    const parentValues: any = {};
    for (let parent of parents) {
      parentValues[parent] = sample[parent];
    }
    // find index of row in CPT that this combination of parents(Xi) is supposed to be
    if (parentValues) {
      index = getCptRowIndex(node.cpt as CptWithParents, parentValues);
    }
    /* 
    parent values now created correctly, run through code below to check that probability is computed correctly
    */
    if (nodeName in observedValues) {
      // Xi is an evidence variable with value xi in observedValues
      let probability = 0;
      const observedValue: keyof CptWithoutParents | CptWithParents =
        observedValues[nodeName];
      if (parents.length > 0) {
        // node with parents
        const cpt = node.cpt as CptWithParents;
        probability = cpt[index].probability[observedValue];
      } else {
        // node without parents
        const cpt = node.cpt as CptWithoutParents;
        probability = cpt[observedValue];
      }
      weight = weight * probability;
    } else {
      // generate random sample from P(Xi | parents(Xi))
      let weights: number[] = [];
      let states: string[] = [];
      if (parents.length > 0) {
        const cpt = network[nodeName].cpt as CptWithParents;
        weights = Object.values(cpt[index].probability);
        states = Object.keys(cpt[index].probability);
      } else {
        const cpt = node.cpt as CptWithoutParents;
        weights = Object.values(cpt);
        states = Object.keys(cpt);
      }
      // create random sample for node
      sample[nodeName] = getRandom(weights, states);
    }
  }
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
  observedValues: Combinations,
  sampleSize: number
) => {
  const likelihood = likelihoodWeighting(
    network,
    query,
    sampleSize,
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

function getCptRowIndex(cpt: CptWithParents, condition: any) {
  let index = 0;
  for (let i = 0; i < cpt.length; i++) {
    if (_.isEqual(cpt[i].condition, condition)) {
      index = i;
    }
  }
  return index;
}

function getRandom(weights: number[], states: string[]) {
  const num = chance.floating({ min: 0, max: 1 });
  let s = 0;
  let lastIndex = weights.length - 1;

  for (var i = 0; i < lastIndex; ++i) {
    s += weights[i];
    if (num < s) {
      return states[i];
    }
  }
  return states[lastIndex];
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
