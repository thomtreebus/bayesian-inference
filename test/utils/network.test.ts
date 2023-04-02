/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import expect from "expect";
import { createNetwork } from "../../src/utils/network";
import { grassWet, rain, sprinkler } from "../../networks/grass-wet";

import { addNode } from "../../src/utils/builder";

describe("Network Utils", () => {
  describe("network", () => {
    it("createNetwork should works", () => {
      const net = createNetwork(rain, sprinkler, grassWet);
      let network = {};

      network = addNode(network, rain);
      network = addNode(network, sprinkler);
      network = addNode(network, grassWet);

      expect(net).toEqual(network);
    });
  });
});
