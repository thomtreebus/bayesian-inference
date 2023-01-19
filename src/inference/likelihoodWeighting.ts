import {
  Node,
  Network,
  CptWithParents,
  CptWithoutParents,
  Infer,
  Combinations,
} from "../types";

function likelihoodWeighting(
  network: Network,
  queryNodes: Combinations,
  sampleSize: number,
  observedValues?: Combinations
): number {
  return 0;
}

export const infer: Infer = (
  network: Network,
  queryNodes: Combinations = {},
  observedValues?: Combinations
) => {
  return likelihoodWeighting(network, queryNodes, 10, observedValues);
};
