/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Combinations, Network } from "../types";

const createCombinations = (network: Network, nodesToCombine: string[]) => {
  const combinations: Combinations[] = [];

  const combine = (nodes: string[], acc = {}) => {
    if (!Array.isArray(nodes) || !nodes.length) {
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
