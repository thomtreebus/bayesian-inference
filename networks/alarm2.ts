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
  states: ["NORMAL", "ESOPHAGEAL", "ONESIDED"],
  parents: [],
  cpt: { NORMAL: 0.92, ESOPHAGEAL: 0.03, ONESIDED: 0.05 },
};

export const PRESS: Node = {
  id: "PRESS",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTTUBE", "KINKEDTUBE", "INTUBATION"],
  cpt: [
    {
      condition: { VENTTUBE: "ZERO", KINKEDTUBE: "TRUE", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.3, NORMAL: 0.49, HIGH: 0.2 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.08, HIGH: 0.9 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.1, LOW: 0.84, NORMAL: 0.05, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.05, LOW: 0.25, NORMAL: 0.25, HIGH: 0.45 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.15, NORMAL: 0.25, HIGH: 0.59 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.29, NORMAL: 0.3, HIGH: 0.4 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.08, HIGH: 0.9 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.4, LOW: 0.58, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTTUBE: "HIGH", KINKEDTUBE: "TRUE", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.2, LOW: 0.75, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.2, LOW: 0.7, NORMAL: 0.09, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.9, NORMAL: 0.08, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.38, HIGH: 0.6 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
  ],
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
  parents: ["MINVOLSET"],
  cpt: [
    {
      condition: { MINVOLSET: "LOW" },
      probability: { ZERO: 0.05, LOW: 0.93, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { MINVOLSET: "NORMAL" },
      probability: { ZERO: 0.05, LOW: 0.01, NORMAL: 0.93, HIGH: 0.01 },
    },
    {
      condition: { MINVOLSET: "HIGH" },
      probability: { ZERO: 0.05, LOW: 0.01, NORMAL: 0.01, HIGH: 0.93 },
    },
  ],
};

export const VENTTUBE: Node = {
  id: "VENTTUBE",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTMACH", "DISCONNECT"],
  cpt: [
    {
      condition: { VENTMACH: "ZERO", DISCONNECT: "TRUE" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "ZERO", DISCONNECT: "FALSE" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "LOW", DISCONNECT: "TRUE" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "LOW", DISCONNECT: "FALSE" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "NORMAL", DISCONNECT: "TRUE" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "NORMAL", DISCONNECT: "FALSE" },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "HIGH", DISCONNECT: "TRUE" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTMACH: "HIGH", DISCONNECT: "FALSE" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
  ],
};

export const VENTLUNG: Node = {
  id: "VENTLUNG",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTTUBE", "KINKEDTUBE", "INTUBATION"],
  cpt: [
    {
      condition: { VENTTUBE: "ZERO", KINKEDTUBE: "TRUE", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.95, LOW: 0.03, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.4, LOW: 0.58, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.3, LOW: 0.68, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "ZERO",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.95, LOW: 0.03, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.5, LOW: 0.48, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "LOW",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.3, LOW: 0.68, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "NORMAL",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTTUBE: "HIGH", KINKEDTUBE: "TRUE", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "TRUE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "NORMAL",
      },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ESOPHAGEAL",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: {
        VENTTUBE: "HIGH",
        KINKEDTUBE: "FALSE",
        INTUBATION: "ONESIDED",
      },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
  ],
};

export const VENTALV: Node = {
  id: "VENTALV",
  states: ["ZERO", "LOW", "NORMAL", "HIGH"],
  parents: ["VENTLUNG", "INTUBATION"],
  cpt: [
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "ZERO", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
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
      probability: { ZERO: 0.01, LOW: 0.97, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.97, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.01, LOW: 0.01, NORMAL: 0.01, HIGH: 0.97 },
    },
    {
      condition: { VENTLUNG: "NORMAL", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.97, LOW: 0.01, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "NORMAL" },
      probability: { ZERO: 0.03, LOW: 0.95, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "ESOPHAGEAL" },
      probability: { ZERO: 0.01, LOW: 0.94, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { VENTLUNG: "HIGH", INTUBATION: "ONESIDED" },
      probability: { ZERO: 0.01, LOW: 0.88, NORMAL: 0.1, HIGH: 0.01 },
    },
  ],
};

export const ARTCO2: Node = {
  id: "ARTCO2",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["VENTALV"],
  cpt: [
    {
      condition: { VENTALV: "ZERO" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
    {
      condition: { VENTALV: "LOW" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
    {
      condition: { VENTALV: "NORMAL" },
      probability: { LOW: 0.04, NORMAL: 0.92, HIGH: 0.04 },
    },
    {
      condition: { VENTALV: "HIGH" },
      probability: { LOW: 0.9, NORMAL: 0.09, HIGH: 0.01 },
    },
  ],
};

export const CATECHOL: Node = {
  id: "CATECHOL",
  states: ["NORMAL", "HIGH"],
  parents: ["ARTCO2", "INSUFFANESTH", "SAO2", "TPR"],
  cpt: [
    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "LOW",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.05, HIGH: 0.95 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "NORMAL",
      },
      probability: { NORMAL: 0.01, HIGH: 0.99 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.1, HIGH: 0.9 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "LOW",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.1, HIGH: 0.9 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.7, HIGH: 0.3 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.1, HIGH: 0.9 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.95, HIGH: 0.05 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.99, HIGH: 0.01 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "NORMAL",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.3, HIGH: 0.7 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.95, HIGH: 0.05 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.99, HIGH: 0.01 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "TRUE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.3, HIGH: 0.7 },
    },

    {
      condition: {
        ARTCO2: "LOW",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.95, HIGH: 0.05 },
    },
    {
      condition: {
        ARTCO2: "NORMAL",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.99, HIGH: 0.01 },
    },
    {
      condition: {
        ARTCO2: "HIGH",
        INSUFFANESTH: "FALSE",
        SAO2: "HIGH",
        TPR: "HIGH",
      },
      probability: { NORMAL: 0.3, HIGH: 0.7 },
    },
  ],
};

export const HR: Node = {
  id: "HR",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["CATECHOL"],
  cpt: [
    {
      condition: { CATECHOL: "NORMAL" },
      probability: { LOW: 0.05, NORMAL: 0.9, HIGH: 0.05 },
    },
    {
      condition: { CATECHOL: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.09, HIGH: 0.9 },
    },
  ],
};

export const CO: Node = {
  id: "CO",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["STROKEVOLUME", "HR"],
  cpt: [
    {
      condition: { STROKEVOLUME: "LOW", HR: "LOW" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "NORMAL", HR: "LOW" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "HIGH", HR: "LOW" },
      probability: { LOW: 0.3, NORMAL: 0.69, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "LOW", HR: "NORMAL" },
      probability: { LOW: 0.95, NORMAL: 0.04, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "NORMAL", HR: "NORMAL" },
      probability: { LOW: 0.04, NORMAL: 0.95, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "HIGH", HR: "NORMAL" },
      probability: { LOW: 0.01, NORMAL: 0.3, HIGH: 0.69 },
    },
    {
      condition: { STROKEVOLUME: "LOW", HR: "HIGH" },
      probability: { LOW: 0.8, NORMAL: 0.19, HIGH: 0.01 },
    },
    {
      condition: { STROKEVOLUME: "NORMAL", HR: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.04, HIGH: 0.95 },
    },
    {
      condition: { STROKEVOLUME: "HIGH", HR: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.01, HIGH: 0.98 },
    },
  ],
};

export const BP: Node = {
  id: "BP",
  states: ["LOW", "NORMAL", "HIGH"],
  parents: ["TPR", "CO"],
  cpt: [
    {
      condition: { TPR: "LOW", CO: "LOW" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { TPR: "NORMAL", CO: "LOW" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { TPR: "HIGH", CO: "LOW" },
      probability: { LOW: 0.9, NORMAL: 0.09, HIGH: 0.01 },
    },
    {
      condition: { TPR: "LOW", CO: "NORMAL" },
      probability: { LOW: 0.98, NORMAL: 0.01, HIGH: 0.01 },
    },
    {
      condition: { TPR: "NORMAL", CO: "NORMAL" },
      probability: { LOW: 0.1, NORMAL: 0.85, HIGH: 0.05 },
    },
    {
      condition: { TPR: "HIGH", CO: "NORMAL" },
      probability: { LOW: 0.05, NORMAL: 0.2, HIGH: 0.75 },
    },
    {
      condition: { TPR: "LOW", CO: "HIGH" },
      probability: { LOW: 0.3, NORMAL: 0.6, HIGH: 0.1 },
    },
    {
      condition: { TPR: "NORMAL", CO: "HIGH" },
      probability: { LOW: 0.05, NORMAL: 0.4, HIGH: 0.55 },
    },
    {
      condition: { TPR: "HIGH", CO: "HIGH" },
      probability: { LOW: 0.01, NORMAL: 0.09, HIGH: 0.9 },
    },
  ],
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
