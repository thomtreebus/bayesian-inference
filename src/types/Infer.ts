/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Combinations, Network } from ".";

export interface Infer {
  (
    network: Network,
    nodes: Combinations,
    given: Combinations,
    sampleSize: number
  ): number;
}
