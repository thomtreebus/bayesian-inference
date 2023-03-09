/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { CptWithParents, CptWithoutParents } from "./Cpt";

export interface Node {
  id: string;
  states: string[];
  parents: string[];
  cpt: CptWithParents | CptWithoutParents;
}
