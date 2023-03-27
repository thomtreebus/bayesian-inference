import { Node } from "../src/types";

export const node1: Node = {
  id: "node1",
  states: ["T", "F"],
  parents: ["node25", "node13", "node16", "node17", "node37"],
  cpt: [
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
  ],
};
export const node2: Node = {
  id: "node2",
  states: ["T", "F"],
  parents: ["node3", "node4", "node5", "node6", "node7", "node8", "node9"],
  cpt: [
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "T",
        node9: "F",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "T",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.69, F: 0.31 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.69, F: 0.31 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "T",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "T",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "T",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "T",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node3: "F",
        node4: "F",
        node5: "F",
        node6: "F",
        node7: "F",
        node8: "F",
        node9: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node3: Node = {
  id: "node3",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node4: Node = {
  id: "node4",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node5: Node = {
  id: "node5",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node6: Node = {
  id: "node6",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node7: Node = {
  id: "node7",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node8: Node = {
  id: "node8",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node9: Node = {
  id: "node9",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node10: Node = {
  id: "node10",
  states: ["T", "F"],
  parents: ["node11", "node12"],
  cpt: [
    {
      condition: { node11: "T", node12: "T" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { node11: "F", node12: "T" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { node11: "T", node12: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node11: "F", node12: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node11: Node = {
  id: "node11",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.25, F: 0.75 },
};
export const node12: Node = {
  id: "node12",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.2, F: 0.8 },
};
export const node13: Node = {
  id: "node13",
  states: ["T", "F"],
  parents: ["node14", "node15"],
  cpt: [
    {
      condition: { node14: "T", node15: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node14: "F", node15: "T" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { node14: "T", node15: "F" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { node14: "F", node15: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node14: Node = {
  id: "node14",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node15: Node = {
  id: "node15",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node16: Node = {
  id: "node16",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node17: Node = {
  id: "node17",
  states: ["T", "F"],
  parents: ["node23", "node18"],
  cpt: [
    {
      condition: { node23: "T", node18: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node23: "F", node18: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node23: "T", node18: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node23: "F", node18: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node18: Node = {
  id: "node18",
  states: ["T", "F"],
  parents: ["node19", "node20", "node21", "node22"],
  cpt: [
    {
      condition: { node19: "T", node20: "T", node21: "T", node22: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "F", node20: "T", node21: "T", node22: "T" },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: { node19: "T", node20: "F", node21: "T", node22: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "F", node20: "F", node21: "T", node22: "T" },
      probability: { T: 0.99, F: 0.01 },
    },
    {
      condition: { node19: "T", node20: "T", node21: "F", node22: "T" },
      probability: { T: 0.98, F: 0.02 },
    },
    {
      condition: { node19: "F", node20: "T", node21: "F", node22: "T" },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: { node19: "T", node20: "F", node21: "F", node22: "T" },
      probability: { T: 0.02, F: 0.98 },
    },
    {
      condition: { node19: "F", node20: "F", node21: "F", node22: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "T", node20: "T", node21: "T", node22: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "F", node20: "T", node21: "T", node22: "F" },
      probability: { T: 0.3, F: 0.7 },
    },
    {
      condition: { node19: "T", node20: "F", node21: "T", node22: "F" },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: { node19: "F", node20: "F", node21: "T", node22: "F" },
      probability: { T: 0.1, F: 0.9 },
    },
    {
      condition: { node19: "T", node20: "T", node21: "F", node22: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "F", node20: "T", node21: "F", node22: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "T", node20: "F", node21: "F", node22: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node19: "F", node20: "F", node21: "F", node22: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node19: Node = {
  id: "node19",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.2, F: 0.8 },
};
export const node20: Node = {
  id: "node20",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.4, F: 0.6 },
};
export const node21: Node = {
  id: "node21",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.1, F: 0.9 },
};
export const node22: Node = {
  id: "node22",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.5, F: 0.5 },
};
export const node23: Node = {
  id: "node23",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.4, F: 0.6 },
};
export const node24: Node = {
  id: "node24",
  states: ["T", "F"],
  parents: ["node25", "node13", "node16", "node17", "node37"],
  cpt: [
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.5, F: 0.5 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
  ],
};
export const node25: Node = {
  id: "node25",
  states: ["T", "F"],
  parents: ["node26", "node27", "node28", "node29", "node30"],
  cpt: [
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "T",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "T",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "T",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "T",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "F",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "F",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "F",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.22, F: 0.78 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "F",
        node29: "T",
        node30: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "T",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "T",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "T",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "T",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "F",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "F",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "F",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "F",
        node29: "F",
        node30: "T",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "T",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "T",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "T",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "T",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "F",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "F",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "F",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "F",
        node29: "T",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "T",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "T",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "T",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "T",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "T",
        node28: "F",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.7, F: 0.2 },
    },
    {
      condition: {
        node26: "F",
        node27: "T",
        node28: "F",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "T",
        node27: "F",
        node28: "F",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: {
        node26: "F",
        node27: "F",
        node28: "F",
        node29: "F",
        node30: "F",
      },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node26: Node = {
  id: "node26",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node27: Node = {
  id: "node27",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node28: Node = {
  id: "node28",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node29: Node = {
  id: "node29",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node30: Node = {
  id: "node30",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};
export const node31: Node = {
  id: "node31",
  states: ["T", "F"],
  parents: ["node1", "node24"],
  cpt: [
    {
      condition: { node1: "T", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "T", node24: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node32: Node = {
  id: "node32",
  states: ["T", "F"],
  parents: ["node1", "node24"],
  cpt: [
    {
      condition: { node1: "T", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "T", node24: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node33: Node = {
  id: "node33",
  states: ["T", "F"],
  parents: ["node1", "node24"],
  cpt: [
    {
      condition: { node1: "T", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "T", node24: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node34: Node = {
  id: "node34",
  states: ["T", "F"],
  parents: ["node1", "node24"],
  cpt: [
    {
      condition: { node1: "T", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "T", node24: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node35: Node = {
  id: "node35",
  states: ["T", "F"],
  parents: ["node1", "node24"],
  cpt: [
    {
      condition: { node1: "T", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "T", node24: "F" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node1: "F", node24: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node36: Node = {
  id: "node36",
  states: ["T", "F"],
  parents: ["node25", "node13", "node16", "node17", "node37"],
  cpt: [
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.3, F: 0.7 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.6, F: 0.4 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.21, F: 0.79 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "T",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.35, F: 0.65 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "T",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "T",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "T",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "T",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
    {
      condition: {
        node25: "F",
        node13: "F",
        node16: "F",
        node17: "F",
        node37: "F",
      },
      probability: { T: 0.4, F: 0.6 },
    },
  ],
};
export const node37: Node = {
  id: "node37",
  states: ["T", "F"],
  parents: ["node38", "node39"],
  cpt: [
    {
      condition: { node38: "T", node39: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node38: "F", node39: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node38: "T", node39: "F" },
      probability: { T: 0.65, F: 0.35 },
    },
    {
      condition: { node38: "F", node39: "F" },
      probability: { T: 0.25, F: 0.75 },
    },
  ],
};
export const node38: Node = {
  id: "node38",
  states: ["T", "F"],
  parents: ["node2", "node10"],
  cpt: [
    {
      condition: { node2: "T", node10: "T" },
      probability: { T: 0.75, F: 0.25 },
    },
    {
      condition: { node2: "F", node10: "T" },
      probability: { T: 0.15, F: 0.85 },
    },
    {
      condition: { node2: "T", node10: "F" },
      probability: { T: 0.2, F: 0.8 },
    },
    {
      condition: { node2: "F", node10: "F" },
      probability: { T: 0.22, F: 0.78 },
    },
  ],
};
export const node39: Node = {
  id: "node39",
  states: ["T", "F"],
  parents: [],
  cpt: { T: 0.75, F: 0.25 },
};

export const allNodes = [
  node1,
  node2,
  node3,
  node4,
  node5,
  node6,
  node7,
  node8,
  node9,
  node10,
  node11,
  node12,
  node13,
  node14,
  node15,
  node16,
  node17,
  node18,
  node19,
  node20,
  node21,
  node22,
  node23,
  node24,
  node25,
  node26,
  node27,
  node28,
  node29,
  node30,
  node31,
  node32,
  node33,
  node34,
  node35,
  node36,
  node37,
  node38,
  node39,
];
