import { Node } from "../src/types/Node";

export const asia: Node = {
  id: "ASIA",
  states: ["yes", "no"],
  parents: [],
  cpt: { T: 0.01, F: 0.99 },
};

export const smoke: Node = {
  id: "SMOKE",
  states: ["yes", "no"],
  parents: [],
  cpt: { T: 0.5, F: 0.5 },
};
export const tub: Node = {
  id: "TUB",
  states: ["yes", "no"],
  parents: ["ASIA"],
  cpt: [
    { condition: { ASIA: "yes" }, probability: { yes: 0.05, no: 0.95 } },
    { condition: { ASIA: "no" }, probability: { yes: 0.01, no: 0.99 } },
  ],
};
export const lung: Node = {
  id: "LUNG",
  states: ["yes", "no"],
  parents: ["SMOKE"],
  cpt: [
    { condition: { SMOKE: "yes" }, probability: { yes: 0.1, no: 0.9 } },
    { condition: { SMOKE: "no" }, probability: { yes: 0.01, no: 0.99 } },
  ],
};
export const either: Node = {
  id: "EITHER",
  states: ["yes", "no"],
  parents: ["TUB", "LUNG"],
  cpt: [
    {
      condition: { TUB: "yes", LUNG: "yes" },
      probability: { yes: 1.0, no: 0 },
    },
    {
      condition: { TUB: "yes", LUNG: "no" },
      probability: { yes: 1.0, no: 0 },
    },
    {
      condition: { TUB: "no", LUNG: "yes" },
      probability: { yes: 1.0, no: 0 },
    },
    {
      condition: { TUB: "no", LUNG: "no" },
      probability: { yes: 0, no: 1.0 },
    },
  ],
};
export const bronc: Node = {
  id: "BRONC",
  states: ["yes", "no"],
  parents: ["SMOKE"],
  cpt: [
    { condition: { SMOKE: "yes" }, probability: { yes: 0.6, no: 0.4 } },
    { condition: { SMOKE: "no" }, probability: { yes: 0.3, no: 0.7 } },
  ],
};
export const xray: Node = {
  id: "XRAY",
  states: ["yes", "no"],
  parents: ["EITHER"],
  cpt: [
    { condition: { EITHER: "yes" }, probability: { yes: 0.98, no: 0.02 } },
    { condition: { EITHER: "no" }, probability: { yes: 0.05, no: 0.95 } },
  ],
};
export const dysp: Node = {
  id: "DYSP",
  states: ["yes", "no"],
  parents: ["EITHER", "BRONC"],
  cpt: [
    {
      condition: { EITHER: "yes", BRONC: "yes" },
      probability: { yes: 0.9, no: 0.1 },
    },
    {
      condition: { EITHER: "yes", BRONC: "no" },
      probability: { yes: 0.7, no: 0.3 },
    },
    {
      condition: { EITHER: "no", BRONC: "yes" },
      probability: { yes: 0.8, no: 0.2 },
    },
    {
      condition: { EITHER: "no", BRONC: "no" },
      probability: { yes: 0.1, no: 0.9 },
    },
  ],
};

export const asiaNodes = [asia, tub, smoke, lung, bronc, either, xray, dysp];
