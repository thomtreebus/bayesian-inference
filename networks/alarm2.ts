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
  parents: ["HYPOVOLEMIA", "LVFAILURE"],
  cpt: [
    {
      condition: { LVFAILURE: "TRUE", HYPOVOLEMIA: "TRUE" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { LVFAILURE: "TRUE", HYPOVOLEMIA: "FALSE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { LVFAILURE: "FALSE", HYPOVOLEMIA: "TRUE" },
      probability: { LOW: 0.01, NORMAL: 0.09, HIGH: 0.9 },
    },
    {
      condition: { LVFAILURE: "FALSE", HYPOVOLEMIA: "FALSE" },
      probability: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
    },
  ],
};

export const LVFAILURE: Node = {
  id: "LVFAILURE",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.05, FALSE: 0.95 },
};

export const STROKEVOLUME: Node = {
  id: "STROKEVOLUME",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["HYPOVOLEMIA", "LVFAILURE"],
  cpt: [
    {
      condition: { LVFAILURE: "TRUE", HYPOVOLEMIA: "TRUE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { LVFAILURE: "TRUE", HYPOVOLEMIA: "FALSE" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { LVFAILURE: "FALSE", HYPOVOLEMIA: "TRUE" },
      probability: { LOW: 0.5, NORMAL: 0.49, HIGH: 0.01 },
    },
    {
      condition: { LVFAILURE: "FALSE", HYPOVOLEMIA: "FALSE" },
      probability: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
    },
  ],
};

export const ERRLOWOUTPUT: Node = {
  id: "ERRLOWOUTPUT",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.05, FALSE: 0.95 },
};

export const HRBP: Node = {
  id: "HRBP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["HR", "ERRLOWOUTPUT"],
  cpt: [
    {
      condition: { HR: "LOW", ERRLOWOUTPUT: "TRUE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { HR: "LOW", ERRLOWOUTPUT: "FALSE" },
      probability: { LOW: 0.4, NORMAL: 0.59, HIGH: 0.01 },
    },
    {
      condition: { HR: "NORMAL", ERRLOWOUTPUT: "TRUE" },
      probability: { LOW: 0.3, NORMAL: 0.4, HIGH: 0.3 },
    },
    {
      condition: { HR: "NORMAL", ERRLOWOUTPUT: "FALSE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRLOWOUTPUT: "TRUE" },
      probability: { LOW: 0.01, NORMAL: 0.98, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRLOWOUTPUT: "FALSE" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
  ],
};

export const HREKG: Node = {
  id: "HREKG",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["HR", "ERRCAUTER"],
  cpt: [
    {
      condition: { HR: "LOW", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "LOW", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "NORMAL", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "NORMAL", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.01, NORMAL: 0.98, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
  ],
};

export const ERRCAUTER: Node = {
  id: "ERRCAUTER",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.1, FALSE: 0.9 },
};

export const HRSAT: Node = {
  id: "HRSAT",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["HR", "ERRCAUTER"],
  cpt: [
    {
      condition: { HR: "LOW", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "LOW", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "NORMAL", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.3333333, NORMAL: 0.3333333, HIGH: 0.3333333 },
    },
    {
      condition: { HR: "NORMAL", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRCAUTER: "TRUE" },
      probability: { LOW: 0.01, NORMAL: 0.98, HIGH: 0.01 },
    },
    {
      condition: { HR: "HIGH", ERRCAUTER: "FALSE" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
  ],
};

export const INSUFFANESTH: Node = {
  id: "INSUFFANESTH",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.1, FALSE: 0.9 },
};

export const ANAPHYLAXIS: Node = {
  id: "ANAPHYLAXIS",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.01, FALSE: 0.99 },
};

export const TPR: Node = {
  id: "TPR",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["ANAPHYLAXIS"],
  cpt: [
    {
      condition: { ANAPHYLAXIS: "TRUE" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { ANAPHYLAXIS: "FALSE" },
      probability: { LOW: 0.3, NORMAL: 0.4, HIGH: 0.3 },
    },
  ],
};

export const EXCP02: Node = {
  id: "EXCP02",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTLUNG", "ARTCO2"],
  cpt: [
    {
      condition: { VENTLUNG: "ZERO", ARTCO2: "LOW" },
      probability: {
        ZERO: 0.97,
        LOW: 0.01,
        NORMAL: 0.01,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "ZERO", ARTCO2: "NORMAL" },
      probability: {
        ZERO: 0.01,
        LOW: 0.97,
        NORMAL: 0.01,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "ZERO", ARTCO2: "HIGH" },
      probability: {
        ZERO: 0.01,
        LOW: 0.97,
        NORMAL: 0.01,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "LOW", ARTCO2: "LOW" },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "LOW", ARTCO2: "NORMAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "LOW", ARTCO2: "HIGH" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", ARTCO2: "LOW" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", ARTCO2: "NORMAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", ARTCO2: "HIGH" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", ARTCO2: "LOW" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: { VENTLUNG: "HIGH", ARTCO2: "NORMAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: { VENTLUNG: "HIGH", ARTCO2: "HIGH" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
  ],
};

export const KINKEDTUBE: Node = {
  id: "KINKEDTUBE",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.04, FALSE: 0.96 },
};

export const MINVOL: Node = {
  id: "MINVOL",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTLING", "INTUBATION"],
  cpt: [
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "NORMAL" },
      probability: {
        ZERO: 0.97,
        LOW: 0.01,
        NORMAL: 0.01,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "ESOPHAGEAL" },
      probability: {
        ZERO: 0.01,
        LOW: 0.97,
        NORMAL: 0.01,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "ONESIDED" },
      probability: {
        ZERO: 0.01,
        LOW: 0.01,
        NORMAL: 0.97,
        HIGH: 0.01,
      },
    },
    {
      condition: { VENTLUNG: "LOW", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: { VENTLUNG: "LOW", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "LOW", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.6, LOW: 0.38, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.5, LOW: 0.48, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
  ],
};

export const FIO2: Node = {
  id: "FIO2",
  states: ["LOW", "NORMAL"],
  parents: [],
  cpt: { LOW: 0.05, NORMAL: 0.95 },
};

export const PVSAT: Node = {
  id: "PVSAT",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["VENTALV", "FIO2"],
  cpt: [
    {
      condition: { VENTALV: "ZERO", FIO2: "LOW" },
      probability: { LOW: 1.0, NORMAL: 0.0, HIGH: 0.0 },
    },
    {
      condition: { VENTALV: "ZERO", FIO2: "NORMAL" },
      probability: { LOW: 0.99, NORMAL: 0.01, HIGH: 0.0 },
    },
    {
      condition: { VENTALV: "LOW", FIO2: "LOW" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { VENTALV: "LOW", FIO2: "NORMAL" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { VENTALV: "NORMAL", FIO2: "LOW" },
      probability: { LOW: 1.0, NORMAL: 0.0, HIGH: 0.0 },
    },
    {
      condition: { VENTALV: "NORMAL", FIO2: "NORMAL" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { VENTALV: "HIGH", FIO2: "LOW" },
      probability: { LOW: 0.01, NORMAL: 0.95, HIGH: 0.04 },
    },
    {
      condition: { VENTALV: "HIGH", FIO2: "NORMAL" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
  ],
};

export const SAO2: Node = {
  id: "SAO2",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["SHUNT", "PVSAT"],
  cpt: [
    {
      condition: { SHUNT: "NORMAL", PVSAT: "LOW" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { SHUNT: "NORMAL", PVSAT: "NORMAL" },
      probability: { LOW: 0.01, NORMAL: 0.98, HIGH: 0.01 },
    },
    {
      condition: { SHUNT: "NORMAL", PVSAT: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
    {
      condition: { SHUNT: "HIGH", PVSAT: "LOW" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { SHUNT: "HIGH", PVSAT: "NORMAL" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { SHUNT: "HIGH", PVSAT: "HIGH" },
      probability: { LOW: 0.69, NORMAL: 0.3, HIGH: 0.01 },
    },
  ],
};

export const PAP: Node = {
  id: "PAP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["PULMEMBOLUS"],
  cpt: [
    {
      condition: { PULMEMBOLUS: "TRUE" },
      probability: { LOW: 0.01, NORMAL: 0.19, HIGH: 0.8 },
    },
    {
      condition: { PULMEMBOLUS: "FALSE" },
      probability: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
    },
  ],
};

export const PULMEMBOLUS: Node = {
  id: "PULMEMBOLUS",
  states: ["TRUE", "FALSE"],
  parents: [],
  cpt: { TRUE: 0.01, FALSE: 0.99 },
};

export const SHUNT: Node = {
  id: "SHUNT",
  states: ["NORMAL", "HIGH"],
  parents: ["PULMEMBOLUS", "INTUBATION"],
  cpt: [
    {
      condition: { PULMEMBOLUS: "TRUE", INTUBATION: "NORMAL" },
      probability: { NORMAL: 0.1, HIGH: 0.9 },
    },
    {
      condition: { PULMEMBOLUS: "TRUE", INTUBATION: "ESOPHAGEAL" },
      probability: { NORMAL: 0.1, HIGH: 0.9 },
    },
    {
      condition: { PULMEMBOLUS: "TRUE", INTUBATION: "ONESIDED" },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: { PULMEMBOLUS: "FALSE", INTUBATION: "NORMAL" },
      probability: { NORMAL: 0.95, HIGH: 0.05 },
    },
    {
      condition: { PULMEMBOLUS: "FALSE", INTUBATION: "ESOPHAGEAL" },
      probability: { NORMAL: 0.95, HIGH: 0.05 },
    },
    {
      condition: { PULMEMBOLUS: "FALSE", INTUBATION: "ONESIDED" },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
  ],
};

export const INTUBATION: Node = {
  id: "INTUBATION",
  states: ["LOW", "ESOPHAGEAL", "ONESIDED"],
  parents: [],
  cpt: { LOW: 0.92, ESOPHAGEAL: 0.03, ONESIDED: 0.05 },
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
  cpt: { TRUE: 0.1, FALSE: 0.9 },
};

export const MINVOLSET: Node = {
  id: "MINVOLSET",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: [],
  cpt: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
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
  parents: ["CATECHOL"],
  cpt: [
    {
      condition: { CATECHOL: "TRUE" },
      probability: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
    },
    {
      condition: { CATECHOL: "FALSE" },
      probability: { LOW: 0.01, NORMAL: 0.09, HIGH: 0.9 },
    },
  ],
};

export const CO: Node = {
  id: "CO",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["HR", "STROKEVOLUME"],
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
