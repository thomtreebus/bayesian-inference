/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

export interface CptRow {
  condition: { [key: string]: string };
  probability: { [key: string]: number };
}

export type CptWithParents = Array<CptRow>;

export interface CptWithoutParents {
  [key: string]: number;
}
