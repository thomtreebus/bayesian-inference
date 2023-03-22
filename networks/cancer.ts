import { Node } from "../src/types/Node";

export const smoker: Node = {
  id: "SMOKER",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.3, F: 0.7 },
};

export const pollution: Node = {
  id: "POLLUTION",
  states: ["LOW", "MEDIUM", "HIGH"],
  parents: [],
  cpt: { LOW: 0.8, MEDIUM: 0.15, HIGH: 0.05 },
};

export const cancer: Node = {
  id: "CANCER",
  states: ["T", "F"],
  parents: ["SMOKER", "POLLUTION"],
  cpt: [
    {
      condition: { SMOKER: "T", POLLUTION: "LOW" },
      probability: { T: 0.03, F: 0.97 },
    },
    {
      condition: { SMOKER: "T", POLLUTION: "MEDIUM" },
      probability: { T: 0.04, F: 0.96 },
    },
    {
      condition: { SMOKER: "T", POLLUTION: "HIGH" },
      probability: { T: 0.05, F: 0.95 },
    },
    {
      condition: { SMOKER: "F", POLLUTION: "LOW" },
      probability: { T: 0.001, F: 0.999 },
    },
    {
      condition: { SMOKER: "F", POLLUTION: "MEDIUM" },
      probability: { T: 0.01, F: 0.99 },
    },
    {
      condition: { SMOKER: "F", POLLUTION: "HIGH" },
      probability: { T: 0.02, F: 0.98 },
    },
  ],
};

export const xRay: Node = {
  id: "X_RAY",
  states: ["POSITIVE", "NEGATIVE"],
  parents: ["CANCER"],
  cpt: [
    {
      condition: { CANCER: "T" },
      probability: { POSITIVE: 0.9, NEGATIVE: 0.1 },
    },
    {
      condition: { CANCER: "F" },
      probability: { POSITIVE: 0.2, NEGATIVE: 0.8 },
    },
  ],
};

export const bronchitis: Node = {
  id: "BRONCHITIS",
  states: ["T", "F"],
  parents: ["CANCER"],
  cpt: [
    {
      condition: { CANCER: "T" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { CANCER: "F" },
      probability: { T: 0.3, F: 0.7 },
    },
  ],
};

export const cancerNodes = [smoker, pollution, cancer, xRay, bronchitis];
