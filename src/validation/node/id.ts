/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { isNil, toString, type } from "ramda";

import { Node } from "../../types/Node";
import { isNotString } from "../../utils/functions";

export default (node: Node) => {
  if (isNil(node.id)) {
    throw new Error(`The node id is required. Node: ${toString(node)}`);
  }

  if (isNotString(node.id)) {
    throw new Error(
      `The node id must be a string. Node id type: ${type(
        node.id
      )}, Node id: ${toString(node.id)}, Node: ${toString(node)}`
    );
  }
};
