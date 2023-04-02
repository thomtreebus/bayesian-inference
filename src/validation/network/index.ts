/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Network, Node } from "../../types";

// Validations for each node attribute
import validNetwork from "./nodes";

export default (network: Network) => {
  validNetwork(network);
};
