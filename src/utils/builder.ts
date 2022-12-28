import { Network, Node } from "..//types";
import { assoc, has } from "ramda";

import checkValidNode from "../validation/node";

const checkNodeInNetwork = (node: Node, network: Network) => {
  if (has(node.id, network)) {
    throw new Error(`[Node "${node.id}"]: Node already added to network.`);
  }
};

/**
 * Adds a node to a Bayesian Network
 *
 * @param {Object} network - The Bayesian Network to add the node
 * @param {Object} node - The node to be added
 * @param {String} node.id - The node id
 * @param {String[]} node.parents - The ids of the node parents or empty array
 * @param {String[]} node.states - The states of the node
 * @param {Object} node.cpt - The node conditional probability table.
 * When the node has no parents, it's an object with keys = states and values = probabilities.
 * When the node has parents, it's an array of objects containing two properties: when and then.
 * The property when is an object with keys = parent id and values = parents state.
 * The property then is an object of the same shape as the case when the node has no parents.
 *
 * @returns {Object} Bayesian Network with node added
 */
export const addNode = (network: Network, node: Node): Network => {
  checkNodeInNetwork(node, network);
  checkValidNode(node, network);

  return assoc(node.id, node, network);
};
