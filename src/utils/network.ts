import { Node } from "../types/Node";
import { Network } from "../types/Network";
import {
  append,
  complement,
  converge,
  filter,
  isNil,
  map,
  pipe,
  prop,
  values,
} from "ramda";

import { addNode } from "..";
import { isNotEmpty } from "./functions";

const everyInArray = (array1: string[], array2: string[]) =>
  array1.every((parent) => array2.indexOf(parent) !== -1);

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

export const getNodeParents: (node: Node) => string[] = prop("parents");
export const getNodeId: (node: Node) => string = prop("id");
export const getNodeStates: (node: Node) => string[] = prop("states");

export const hasNodeParents: (node: Node) => boolean = pipe(
  getNodeParents,
  isNotEmpty
);
export const getNodeParentsAndId: (node: Node) => string[] = converge(append, [
  prop("id"),
  prop("parents"),
]);
export const hasNotNodeParents: (node: Node) => boolean =
  complement(hasNodeParents);
export const getNodesFromNetwork: (network: Network) => Node[] = values;

export const filterNodeWithParents: (nodes: Node[]) => Node[] =
  filter(hasNodeParents);

export const getNodeIdsWithoutParents: (network: Network) => string[] = pipe(
  getNodesFromNetwork,
  filter(hasNotNodeParents),
  map(getNodeId)
);
