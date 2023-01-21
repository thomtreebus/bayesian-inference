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
  for (const [nodeName, node] of Object.entries(network)) {
    console.log(nodeName);
  }
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
  weightedSample(network, observedValues);
  return likelihoodWeighting(network, queryNodes, 10, observedValues);
};
