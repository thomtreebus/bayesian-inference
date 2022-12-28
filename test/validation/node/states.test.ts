import validNodeStates from "../../../src/validation/node/states";

describe("Node States Validations", () => {
  describe('When node does not have "states"', () => {
    const node = { id: "node-id" };

    it("throws an error that node states is required", () => {
      expect(() => {
        // @ts-ignore
        validNodeStates(node);
      }).toThrow(
        `[Node "node-id"]: States is required and must be an array of strings. Node: {"id": "node-id"}`
      );
    });
  });

  describe('When node "states" is not an array', () => {
    const node = { id: "node-id", states: "states" };

    it("throws an error that node states must be an array", () => {
      expect(() => {
        // @ts-ignore
        validNodeStates(node);
      }).toThrow(
        `[Node "node-id"]: States must be an array of strings. Node states type: String. Node states: "states"`
      );
    });
  });

  describe('When node "states" is an array', () => {
    describe("and is empty", () => {
      const node = { id: "node-id", states: [] };

      it("throws an error that node states must contain at least one string", () => {
        expect(() => {
          // @ts-ignore
          validNodeStates(node);
        }).toThrow(
          `[Node "node-id"]: States must contain at least one string. Node states: []`
        );
      });
    });

    describe("and not empty", () => {
      describe("and has not string elements", () => {
        const node = { id: "node-id", states: ["True", false] };

        it("throws an error that node all states must be strings", () => {
          expect(() => {
            // @ts-ignore
            validNodeStates(node);
          }).toThrow(
            `[Node "node-id"]: States must be strings. Node state type: Boolean. Node state: false. Node states: ["True", false]`
          );
        });
      });

      describe("and has only string", () => {
        const node = { id: "node-id", states: ["True", "False"] };

        it("does not throws an error", () => {
          expect(() => {
            // @ts-ignore
            validNodeStates(node);
          }).not.toThrow();
        });
      });
    });
  });
});
