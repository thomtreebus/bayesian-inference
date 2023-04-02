/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { isEmpty, isNil, toString, type } from "ramda";

import { Node } from "../../types";
import { isNotString } from "../../utils/functions";

export default (node: Node) => {
  if (isNil(node.states)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: States is required and must be an array of strings. Node: ${toString(
        node
      )}`
    );
  }

  if (!Array.isArray(node.states)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: States must be an array of strings. Node states type: ${type(
        node.states
      )}. Node states: ${toString(node.states)}`
    );
  }

  if (isEmpty(node.states)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: States must contain at least one string. Node states: ${toString(
        node.states
      )}`
    );
  }

  node.states.forEach((state) => {
    if (isNotString(state)) {
      throw new Error(
        `[Node "${node.id}"]: States must be strings. Node state type: ${type(
          state
        )}. Node state: ${toString(state)}. Node states: ${toString(
          node.states
        )}`
      );
    }
  });
};
