import { Node } from "../src/types/Node";

export const burglary: Node = {
  id: "BURGLARY",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const earthquake: Node = {
  id: "EARTHQUAKE",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.002, F: 0.998 },
};

export const alarm = {
  id: "ALARM",
  states: ["T", "F"],
  parents: ["BURGLARY", "EARTHQUAKE"],
  cpt: [
    {
      condition: { BURGLARY: "T", EARTHQUAKE: "T" },
      probability: { T: 0.95, F: 0.05 },
    },
    {
      condition: { BURGLARY: "T", EARTHQUAKE: "F" },
      probability: { T: 0.94, F: 0.06 },
    },
    {
      condition: { BURGLARY: "F", EARTHQUAKE: "T" },
      probability: { T: 0.29, F: 0.71 },
    },
    {
      condition: { BURGLARY: "F", EARTHQUAKE: "F" },
      probability: { T: 0.001, F: 0.999 },
    },
  ],
};

export const johnCalls: Node = {
  id: "JOHN_CALLS",
  states: ["T", "F"],
  parents: ["ALARM"],
  cpt: [
    { condition: { ALARM: "T" }, probability: { T: 0.9, F: 0.1 } },
    { condition: { ALARM: "F" }, probability: { T: 0.05, F: 0.95 } },
  ],
};

export const maryCalls: Node = {
  id: "MARY_CALLS",
  states: ["T", "F"],
  parents: ["ALARM"],
  cpt: [
    { condition: { ALARM: "T" }, probability: { T: 0.7, F: 0.3 } },
    { condition: { ALARM: "F" }, probability: { T: 0.01, F: 0.99 } },
  ],
};

export const alarmNodes = [burglary, earthquake, alarm, johnCalls, maryCalls];
