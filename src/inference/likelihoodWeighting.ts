import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
} from "../types";

function weightedSample(network: Network, observedValues?: Combinations) {
  const x = observedValues;
  const w = 1;

  return {
    event: x,
    weigh: w,
  };
}

function likelihoodWeighting(
  network: Network,
  queryNodes: Combinations,
  sampleSize: number,
  observedValues?: Combinations
): number {
  const W: number[] = [];
  W.push(0);
  console.log(W);

  return 0;
}

export const infer: Infer = (
  network: Network,
  queryNodes: Combinations = {},
  observedValues?: Combinations
) => {
  return likelihoodWeighting(network, queryNodes, 10, observedValues);
};
