/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Node } from "../types/Node";
import { Network } from "../types/Network";
import { isNil } from "ramda";

import { addNode } from "./builder";

const everyInArray = (arr1: string[], arr2: string[]) =>
  arr1.every((parent) => arr2.indexOf(parent) !== -1);

const getNext = (oNodes: Node[]) => {
  const nodes = [...oNodes].sort(
    (node1, node2) => node1.parents.length - node2.parents.length
  );
  const nodesGiven: string[] = [];

  return () => {
    for (let i = 0; i < nodes.length; i++) {
      const node: Node = nodes[i];
      const noParents: boolean = node.parents.length === 0;

      if (noParents || everyInArray(node.parents, nodesGiven)) {
        nodesGiven.push(node.id);
        nodes.splice(i, 1);
        return node;
      }
    }
  };
};

export const createNetwork = (...nodes: Node[]): Network => {
  const next = getNext(nodes);

  return nodes.reduce((net) => {
    const node = next();

    if (isNil(node)) return net;

    return { ...addNode(net, node) };
  }, {});
};
