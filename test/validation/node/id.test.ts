import validNodeId from "../../../src/validation/node/id";

describe("Node Id Validations", () => {
  describe('When node does not have "id"', () => {
    const node = { states: ["T", "F"] };

    it("throws an error that node id is required", () => {
      expect(() => {
        // @ts-ignore
        validNodeId(node);
      }).toThrow(`The node id is required. Node: {"states": ["T", "F"]}`);
    });
  });

  describe('When node has "id" but is not a string', () => {
    const node = { id: 69 };

    it("throws an error that node id must be a string", () => {
      expect(() => {
        // @ts-ignore
        validNodeId(node);
      }).toThrow(
        `The node id must be a string. Node id type: Number, Node id: 69, Node: {"id": 69}`
      );
    });
  });

  describe('When node has "id" and is a string', () => {
    const node = { id: "node-id" };

    it("does not throw an error", () => {
      expect(() => {
        // @ts-ignore
        validNodeId(node);
      }).not.toThrow();
    });
  });
});
