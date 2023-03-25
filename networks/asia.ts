import { Node } from "../src/types/Node";

export const asia: Node = {
  id: "ASIA",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.01, F: 0.99 },
};

export const smoke: Node = {
  id: "SMOKE",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.5, F: 0.5 },
};
export const tub: Node = {
  id: "TUB",
  states: ["T", "F"],
  parents: ["ASIA"],
  cpt: [
    { condition: { ASIA: "T" }, probability: { T: 0.05, F: 0.95 } },
    { condition: { ASIA: "F" }, probability: { T: 0.01, F: 0.99 } },
  ],
};
export const lung: Node = {
  id: "LUNG",
  states: ["T", "F"],
  parents: ["SMOKE"],
  cpt: [
    { condition: { SMOKE: "T" }, probability: { T: 0.1, F: 0.9 } },
    { condition: { SMOKE: "F" }, probability: { T: 0.01, F: 0.99 } },
  ],
};
export const either: Node = {
  id: "EITHER",
  states: ["T", "F"],
  parents: ["TUB", "LUNG"],
  cpt: [
    {
      condition: { TUB: "T", LUNG: "T" },
      probability: { T: 1.0, F: 0 },
    },
    {
      condition: { TUB: "T", LUNG: "F" },
      probability: { T: 1.0, F: 0 },
    },
    {
      condition: { TUB: "F", LUNG: "T" },
      probability: { T: 1.0, F: 0 },
    },
    {
      condition: { TUB: "F", LUNG: "F" },
      probability: { T: 0, F: 1.0 },
    },
  ],
};
export const bronc: Node = {
  id: "BRONC",
  states: ["T", "F"],
  parents: ["SMOKE"],
  cpt: [
    { condition: { SMOKE: "T" }, probability: { T: 0.6, F: 0.4 } },
    { condition: { SMOKE: "F" }, probability: { T: 0.3, F: 0.7 } },
  ],
};
export const xray: Node = {
  id: "XRAY",
  states: ["T", "F"],
  parents: ["EITHER"],
  cpt: [
    { condition: { EITHER: "T" }, probability: { T: 0.98, F: 0.02 } },
    { condition: { EITHER: "F" }, probability: { T: 0.05, F: 0.95 } },
  ],
};
export const dysp: Node = {
  id: "DYSP",
  states: ["T", "F"],
  parents: ["EITHER", "BRONC"],
  cpt: [
    {
      condition: { EITHER: "T", BRONC: "T" },
      probability: { T: 0.9, F: 0.1 },
    },
    {
      condition: { EITHER: "T", BRONC: "F" },
      probability: { T: 0.7, F: 0.3 },
    },
    {
      condition: { EITHER: "F", BRONC: "T" },
      probability: { T: 0.8, F: 0.2 },
    },
    {
      condition: { EITHER: "F", BRONC: "F" },
      probability: { T: 0.1, F: 0.9 },
    },
  ],
};

export const asiaNodes = [asia, tub, smoke, lung, bronc, either, xray, dysp];
