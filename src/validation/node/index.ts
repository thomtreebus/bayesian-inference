/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Network, Node } from "../../types";

// Validations for each node attribute
import validNodeId from "./id";
import validNodeStates from "./states";
import validNodeParents from "./parents";
import validNodeCpt from "./cpt";

export default (node: Node, network: Network) => {
  validNodeId(node);
  validNodeStates(node);
  validNodeParents(node, network);
  validNodeCpt(node, network);
};
