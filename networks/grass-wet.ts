/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { Node } from "../src/types";

export const rain: Node = {
  id: "RAIN",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.2, F: 0.8 },
};

export const sprinkler: Node = {
  id: "SPRINKLER",
  states: ["T", "F"],
  parents: ["RAIN"],
  cpt: [
    { condition: { RAIN: "T" }, probability: { T: 0.01, F: 0.99 } },
    { condition: { RAIN: "F" }, probability: { T: 0.4, F: 0.6 } },
  ],
};

export const grassWet: Node = {
  id: "GRASS_WET",
  states: ["T", "F"],
  parents: ["RAIN", "SPRINKLER"],
  cpt: [
    {
      condition: { RAIN: "T", SPRINKLER: "T" },
      probability: { T: 0.99, F: 0.01 },
    },
    {
      condition: { RAIN: "T", SPRINKLER: "F" },
      probability: { T: 0.8, F: 0.2 },
    },
    {
      condition: { RAIN: "F", SPRINKLER: "T" },
      probability: { T: 0.9, F: 0.1 },
    },
    { condition: { RAIN: "F", SPRINKLER: "F" }, probability: { T: 0, F: 1 } },
  ],
};

export const allNodes = [rain, sprinkler, grassWet];
