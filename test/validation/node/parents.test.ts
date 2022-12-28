import validNodeParents from "../../../src/validation/node/parents";

describe("Node Parents Validations", () => {
  const network = {
    node1: {},
    node2: {},
    node3: {},
  };

  describe('When node does not have "parents"', () => {
    const node = { id: "node-id" };

    it("throws an error that node parents is required", () => {
      expect(() => {
        // @ts-ignore
        validNodeParents(node, network);
      }).toThrow(
        `[Node "node-id"]: Parents is required and must be an array of strings. Node: {"id": "node-id"}`
      );
    });
  });

  describe('When node "parents" is not an array', () => {
    const node = { id: "node-id", parents: "parents" };

    it("throws an error that node parents must be an array", () => {
      expect(() => {
        // @ts-ignore
        validNodeParents(node, network);
      }).toThrow(
        `[Node "node-id"]: Parents must be an array of strings. Node parents type: String. Node parents: "parents"`
      );
    });
  });

  describe('When node "parents" is an array', () => {
    describe("and is empty", () => {
      const node = { id: "node-id", parents: [] };

      it("does not throws an error", () => {
        expect(() => {
          // @ts-ignore
          validNodeParents(node, network);
        }).not.toThrow();
      });
    });

    describe("and not empty", () => {
      describe("and has not string elements", () => {
        const node = { id: "node-id", parents: ["node1", false] };

        it("throws an error that node all parents must be strings", () => {
          expect(() => {
            // @ts-ignore
            validNodeParents(node, network);
          }).toThrow(
            `[Node "node-id"]: Parents must be strings. Node parent type: Boolean. Node parent: false. Node parents: ["node1", false]`
          );
        });
      });

      describe("and has only string", () => {
        describe("and node parents is not into network", () => {
          const node = { id: "node-id", parents: ["node1", "node123"] };

          it("throws an error that node parent must be into network", () => {
            expect(() => {
              // @ts-ignore
              validNodeParents(node, network);
            }).toThrow(
              '[Node "node-id"]: Parent node "node123" was not found in the network.'
            );
          });
        });

        describe("and node parents is into network", () => {
          const node = { id: "node-id", parents: ["node1", "node2"] };

          it("does not throws an error", () => {
            expect(() => {
              // @ts-ignore
              validNodeParents(node, network);
            }).not.toThrow();
          });
        });
      });
    });
  });
});
