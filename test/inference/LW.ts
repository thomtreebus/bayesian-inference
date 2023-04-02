/**
 * This file is a modified version of a file from the BayesJS package
 * Original authors: Felipe Nolleto Nascimento, Fernando Alex Helwanger
 * Version: v0.6.5
 * Github Repository: https://github.com/bayesjs/bayesjs
 * NPM Link: https://www.npmjs.com/package/bayesjs
 */

import expect from "expect";

import { Infer } from "../../src/types";
import { allNodes } from "../../networks/grass-wet";
import { createNetwork } from "../../src/utils/network";
import { likelihoodWeighting } from "../../src/inference";
import { Console } from "console";

const network = createNetwork(...allNodes);

const sampleSize = 10000;

function percentError(target: number, output: number): number {
  const error = (target - output) / target;
  return Math.abs(error * 100);
}
const within10Percent = (actual: number, approximation: number) => {
  const pe = percentError(actual, approximation);
  if (pe < 10) {
    return true;
  }
  return false;
};

const infersGiveSprinklerTrue = (infer: Infer) => {
  const observedValues = { SPRINKLER: "T" };
  let approx = infer(network, { RAIN: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.0062, approx)).toBeTruthy();

  approx = infer(network, { RAIN: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.9938, approx)).toBeTruthy();

  approx = infer(network, { GRASS_WET: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.9006, approx)).toBeTruthy();

  approx = infer(network, { GRASS_WET: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.0994, approx)).toBeTruthy();
};

const infersGiveGrassWetTrue = (infer: Infer) => {
  const observedValues = { GRASS_WET: "T" };
  let approx = infer(network, { RAIN: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.3577, approx)).toBeTruthy();

  approx = infer(network, { RAIN: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.6423, approx)).toBeTruthy();

  approx = infer(network, { SPRINKLER: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.6467, approx)).toBeTruthy();

  approx = infer(network, { SPRINKLER: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.3533, approx)).toBeTruthy();
};

const infersGiveRainTrue = (infer: Infer) => {
  const observedValues = { RAIN: "T" };
  let approx = infer(network, { SPRINKLER: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.01, approx)).toBeTruthy();

  approx = infer(network, { SPRINKLER: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.99, approx)).toBeTruthy();

  approx = infer(network, { GRASS_WET: "T" }, observedValues, sampleSize);
  expect(within10Percent(0.8019, approx)).toBeTruthy();

  approx = infer(network, { GRASS_WET: "F" }, observedValues, sampleSize);
  expect(within10Percent(0.1981, approx)).toBeTruthy();
};

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Likelihood Weighting": likelihoodWeighting.infer,
};

const tests: { [key: string]: (infer: Infer) => void } = {
  "infers given sprinkler true": infersGiveSprinklerTrue,
  "infers given grass wet true": infersGiveGrassWetTrue,
};

describe("inference tests", () => {
  describe("alarmNetwork", () => {
    const testNames = Object.keys(tests);
    const inferAlgorithmNames = Object.keys(inferenceAlgorithmNames);
    for (const testName of testNames) {
      const method = tests[testName];
      for (const inferAlgName of inferAlgorithmNames) {
        const infer = inferenceAlgorithmNames[inferAlgName];
        it(`${testName} (${inferAlgName})`, () => method(infer));
      }
    }
  });
});
