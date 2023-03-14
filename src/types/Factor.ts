/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

export interface FactorItem {
  combination: { [nodeId: string]: string };
  value: number;
}

export type Factor = Array<FactorItem>;
// export interface Factor {
//   node: string;
//   items: Array<FactorItem>;
// }
