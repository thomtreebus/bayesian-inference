import validNodeCpt from "../../../src/validation/node/cpt";

describe("Node Cpt Validations", () => {
  const network = {
    node1: {
      id: "node1",
      states: ["True", "False"],
    },
  };

  describe('condition node does not have "cpt"', () => {
    const node = { id: "node-id" };

    it("throws an error that node cpt is required", () => {
      expect(() => {
        // @ts-ignore
        validNodeCpt(node, network);
      }).toThrow(
        `[Node "node-id"]: Cpt is required and must be an object or an array. Node: {"id": "node-id"}`
      );
    });
  });

  describe('condition node "cpt" is not an array nor object', () => {
    const node = { id: "node-id", cpt: "cpt" };

    it("throws an error that node cpt must be an array or object", () => {
      expect(() => {
        // @ts-ignore
        validNodeCpt(node, network);
      }).toThrow(
        `[Node "node-id"]: Cpt must be an object or an array. Cpt type: String. Cpt: "cpt"`
      );
    });
  });

  describe('condition node "cpt" is an object', () => {
    describe("and has a missing probability", () => {
      const node = {
        id: "node-id",
        states: ["True", "False"],
        cpt: { True: 0.5 },
      };

      it("throws an error that has one missing probability", () => {
        expect(() => {
          // @ts-ignore
          validNodeCpt(node, network);
        }).toThrow(
          `[Node "node-id"]: Missing probability for "False" state. Cpt: {"True": 0.5}`
        );
      });
    });

    describe("and has probability that is not a number", () => {
      const node = {
        id: "node-id",
        states: ["True", "False"],
        cpt: { True: 0.5, False: "0.5" },
      };

      it("throws an error that has one probability is not a number", () => {
        expect(() => {
          // @ts-ignore
          validNodeCpt(node, network);
        }).toThrow(
          `[Node "node-id"]: All probabilities must be a number. Cpt type for "False": String. Cpt for "False": "0.5". Cpt: {"False": "0.5", "True": 0.5}`
        );
      });
    });

    describe("and all probabilities are numbers", () => {
      const node = {
        id: "node-id",
        states: ["True", "False"],
        cpt: { True: 0.5, False: 0.5 },
      };

      it("does not throws an error", () => {
        expect(() => {
          // @ts-ignore
          validNodeCpt(node, network);
        }).not.toThrow();
      });
    });
  });

  describe('condition node "cpt" is an array', () => {
    describe("and has not all parents combinations", () => {
      const node = {
        id: "node-id",
        states: ["True", "False"],
        parents: ["node1"],
        cpt: [
          {
            condition: { node1: "True" },
            probability: { True: 0.5, False: 0.5 },
          },
          // { condition: { node1: 'False', }, probability: { True: 0.5, False: 0.5 } },
        ],
      };

      it("throws an error that has one missing combination", () => {
        expect(() => {
          // @ts-ignore
          validNodeCpt(node, network);
        }).toThrow(
          `[Node "node-id"]: Cpt has one missing combination. Missing cpt combination (condition): {"node1": "False"}. Cpt combinations (condition's): [{"node1": "True"}]. Combinations needed: [{"node1": "True"}, {"node1": "False"}]`
        );
      });
    });

    describe("and has all parents combinations", () => {
      describe("and has one invalid combination", () => {
        let warn: jest.SpyInstance;
        const node = {
          id: "node-id",
          states: ["True", "False"],
          parents: ["node1"],
          cpt: [
            {
              condition: { "invalid-node": "True" },
              probability: { True: 0.5, False: 0.5 },
            },
            {
              condition: { node1: "True" },
              probability: { True: 0.5, False: 0.5 },
            },
            {
              condition: { node1: "False" },
              probability: { True: 0.5, False: 0.5 },
            },
          ],
        };

        beforeEach(() => {
          warn = jest.spyOn(console, "warn").mockImplementation(() => {});
        });

        afterEach(() => {
          warn.mockRestore();
        });

        it("warn that has invalid", () => {
          // @ts-ignore
          validNodeCpt(node, network);

          expect(warn).toHaveBeenCalledWith(
            `[Node "node-id"]: Cpt has one extra/invalid combination. Invalid cpt combination (condition): {"invalid-node": "True"}. Cpt combinations (condition's): [{"invalid-node": "True"}, {"node1": "True"}, {"node1": "False"}]. Combinations needed: [{"node1": "True"}, {"node1": "False"}]`
          );
        });
      });

      describe("and has a missing probability", () => {
        const node = {
          id: "node-id",
          states: ["True", "False"],
          parents: ["node1"],
          cpt: [
            { condition: { node1: "True" }, probability: { False: 0.5 } },
            { condition: { node1: "False" }, probability: { False: 0.5 } },
          ],
        };

        it("throws an error that has one missing probability", () => {
          expect(() => {
            // @ts-ignore
            validNodeCpt(node, network);
          }).toThrow(
            `[Node "node-id"]: Missing probability for "True" state. Cpt: {"False": 0.5}`
          );
        });
      });

      describe("and has probability that is not a number", () => {
        const node = {
          id: "node-id",
          states: ["True", "False"],
          parents: ["node1"],
          cpt: [
            {
              condition: { node1: "True" },
              probability: { True: "0.5", False: 0.5 },
            },
            {
              condition: { node1: "False" },
              probability: { True: "0.5", False: 0.5 },
            },
          ],
        };

        it("throws an error that has one probability is not a number", () => {
          expect(() => {
            // @ts-ignore
            validNodeCpt(node, network);
          }).toThrow(
            `[Node "node-id"]: All probabilities must be a number. Cpt type for "True": String. Cpt for "True": "0.5". Cpt: {"False": 0.5, "True": "0.5"}`
          );
        });
      });

      describe("and all probabilities are numbers", () => {
        const node = {
          id: "node-id",
          states: ["True", "False"],
          parents: ["node1"],
          cpt: [
            {
              condition: { node1: "True" },
              probability: { True: 0.5, False: 0.5 },
            },
            {
              condition: { node1: "False" },
              probability: { True: 0.5, False: 0.5 },
            },
          ],
        };

        it("does not throws an error", () => {
          expect(() => {
            // @ts-ignore
            validNodeCpt(node, network);
          }).not.toThrow();
        });
      });
    });
  });
});
