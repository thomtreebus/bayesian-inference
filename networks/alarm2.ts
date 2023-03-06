import { Node } from "../src/types/Node";

export const HISTORY: Node = {
  id: "HISTORY",
  states: ["TRUE", "FALSE"],
  parents: ["LVFAILURE"],
  cpt: [
    {
      condition: { LVFAILURE: "TRUE" },
      probability: { TRUE: 0.9, FALSE: 0.1 },
    },
    {
      condition: { LVFAILURE: "FALSE" },
      probability: { TRUE: 0.01, FALSE: 0.99 },
    },
  ],
};

export const CVP: Node = {
  id: "CVP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["LVEDVOLUME"],
  cpt: [
    {
      condition: { LVEDVOLUME: "LOW" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { LVEDVOLUME: "NORMAL" },
      probability: { LOW: 0.04, NORMAL: 0.95, HIGH: 0.01 },
    },
    {
      condition: { LVEDVOLUME: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.29, HIGH: 0.7 },
    },
  ],
};

export const PCWP: Node = {
  id: "PCWP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["LVEDVOLUME"],
  cpt: [
    {
      condition: { LVEDVOLUME: "LOW" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { LVEDVOLUME: "NORMAL" },
      probability: { LOW: 0.04, NORMAL: 0.95, HIGH: 0.01 },
    },
    {
      condition: { LVEDVOLUME: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.04, HIGH: 0.95 },
    },
  ],
};

export const HYPOVOLEMIA: Node = {
  id: "HYPOVOLEMIA",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.2, FALSE: 0.8 },
};

export const LVEDVOLUME: Node = {
  id: "LVEDVOLUME",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const LVFAILURE: Node = {
  id: "LVFAILURE",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const STROKEVOLUME: Node = {
  id: "STROKEVOLUME",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const ERRLOWOUTPUT: Node = {
  id: "ERRLOWOUTPUT",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const HRBP: Node = {
  id: "HRBP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const HREKG: Node = {
  id: "HREKG",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const ERRCAUTER: Node = {
  id: "ERRCAUTER",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const HRSAT: Node = {
  id: "HRSAT",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const INSUFFANESTH: Node = {
  id: "INSUFFANESTH",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const ANAPHYLAXIS: Node = {
  id: "ANAPHYLAXIS",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const TPR: Node = {
  id: "TPR",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const EXCP02: Node = {
  id: "EXCP02",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const KINKEDTUBE: Node = {
  id: "KINKEDTUBE",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const MINVOL: Node = {
  id: "MINVOL",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const FIO2: Node = {
  id: "FIO2",
  states: ["LOW", "NORMAL"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const PVSAT: Node = {
  id: "PVSAT",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const SAO2: Node = {
  id: "SAO2",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const PAP: Node = {
  id: "PAP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const PULMEMBOLUS: Node = {
  id: "PULMEMBOLUS",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const SHUNT: Node = {
  id: "SHUNT",
  states: ["NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const INTUBATION: Node = {
  id: "INTUBATION",
  states: ["LOW", "ESOPHAGEAL", "ONESIDED"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const PRESS: Node = {
  id: "PRESS",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const DISCONNECT: Node = {
  id: "DISCONNECT",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const MINVOLSET: Node = {
  id: "MINVOLSET",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const VENTMACH: Node = {
  id: "VENTMACH",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const VENTTUBE: Node = {
  id: "VENTTUBE",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const VENTLUNG: Node = {
  id: "VENTLUNG",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const VENTALV: Node = {
  id: "VENTALV",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const ARTCO2: Node = {
  id: "ARTCO2",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const CATECHOL: Node = {
  id: "CATECHOL",
  states: ["NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const HR: Node = {
  id: "HR",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const CO: Node = {
  id: "CO",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const BP: Node = {
  id: "BP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { T: 0.001, F: 0.999 },
};

export const allNodes = [
  HISTORY,
  CVP,
  PCWP,
  HYPOVOLEMIA,
  LVEDVOLUME,
  LVFAILURE,
  STROKEVOLUME,
  ERRLOWOUTPUT,
  HRBP,
  HREKG,
  ERRCAUTER,
  HRSAT,
  INSUFFANESTH,
  ANAPHYLAXIS,
  TPR,
  EXCP02,
  KINKEDTUBE,
  MINVOL,
  FIO2,
  PVSAT,
  SAO2,
  PAP,
  PULMEMBOLUS,
  SHUNT,
  INTUBATION,
  PRESS,
  DISCONNECT,
  MINVOLSET,
  VENTMACH,
  VENTTUBE,
  VENTLUNG,
  VENTALV,
  ARTCO2,
  CATECHOL,
  HR,
  CO,
  BP,
];
