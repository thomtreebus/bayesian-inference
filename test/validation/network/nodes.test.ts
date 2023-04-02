/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import { createNetwork } from "../../../src/utils/network";
import validNetwork from "../../../src/validation/network/";
import { allNodes } from "../../../networks/grass-wet";

describe("Network Node Validations", () => {
  describe("When all nodes are valid", () => {
    const network = createNetwork(...allNodes);

    it("does not throw an error", () => {
      expect(() => {
        // @ts-ignore
        validNetwork(network);
      }).not.toThrow();
    });
  });

  describe('When node in network does not have "id"', () => {
    const network = { node1: { states: ["T", "F"] } };

    it("throws an error that node id is required", () => {
      expect(() => {
        // @ts-ignore
        validNetwork(network);
      }).toThrow(`The node id is required. Node: {"states": ["T", "F"]}`);
    });
  });

  describe('When node in network does not have "states"', () => {
    const network = { node1: { id: "node-id" } };

    it("throws an error that node id is required", () => {
      expect(() => {
        // @ts-ignore
        validNetwork(network);
      }).toThrow(
        `[Node "node-id"]: States is required and must be an array of strings. Node: {"id": "node-id"}`
      );
    });
  });

  describe('When node in network does not have "parents"', () => {
    const network = { node1: { id: "node-id", states: ["T", "F"] } };

    it("throws an error that node id is required", () => {
      expect(() => {
        // @ts-ignore
        validNetwork(network);
      }).toThrow(
        `[Node "node-id"]: Parents is required and must be an array of strings. Node: {"id": "node-id", "states": ["T", "F"]}`
      );
    });
  });

  describe('When node in network does not have "cpt"', () => {
    const network = {
      node1: { id: "node-id", states: ["T", "F"], parents: [] },
    };

    it("throws an error that node id is required", () => {
      expect(() => {
        // @ts-ignore
        validNetwork(network);
      }).toThrow(
        `[Node "node-id"]: Cpt is required and must be an object or an array. Node: {"id": "node-id", "parents": [], "states": ["T", "F"]}`
      );
    });
  });
});
