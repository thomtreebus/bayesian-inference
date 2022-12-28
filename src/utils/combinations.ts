import { Combinations, Network } from "../types";

const createCombinations = (network: Network, nodesToCombine: string[]) => {
  const combinations: Combinations[] = [];

  const combine = (nodes: string[], acc = {}) => {
    if (nodes.length === 0) {
      combinations.push(acc);
    } else {
      const [nodeId, ...rest] = nodes;
      const { states } = network[nodeId];

      for (const state of states) {
        combine(rest, {
          ...acc,
          [nodeId]: state,
        });
      }
    }
  };

  combine(nodesToCombine);

  return combinations;
};

export const buildCombinations = (
  network: Network,
  nodesToCombine?: string[]
): Combinations[] => {
  const nodeIds = nodesToCombine || Object.keys(network);

  return createCombinations(network, nodeIds);
};
