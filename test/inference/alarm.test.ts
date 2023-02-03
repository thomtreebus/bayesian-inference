import expect from "expect";

import { Infer } from "../../src/types";
import { allNodes } from "../../networks/alarm";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";

const { likelihoodWeighting } = inferenceAlgorithms;

const network = createNetwork(...allNodes);
const samples = 100000;

const within1Percent = (actual: number, approximation: number) => {
  const ratio = actual / approximation;
  // console.log(Math.abs(1 - ratio));
  if (Math.abs(1 - ratio) < 0.1) {
    return true;
  }
  return false;
};

const inferAlarmGiveBurglaryTrue = (infer: Infer) => {
  const observedValues = { BURGLARY: "T" };
  let approx = 0;
  approx = infer(network, { EARTHQUAKE: "T" }, observedValues, samples);
  expect(within1Percent(0.002, approx)).toBeTruthy();

  approx = infer(network, { EARTHQUAKE: "F" }, observedValues, samples);
  expect(within1Percent(0.998, approx)).toBeTruthy();

  approx = infer(network, { ALARM: "T" }, observedValues, samples);
  expect(within1Percent(0.94, approx)).toBeTruthy();

  approx = infer(network, { ALARM: "F" }, observedValues, samples);
  expect(within1Percent(0.06, approx)).toBeTruthy();

  approx = infer(network, { JOHN_CALLS: "T" }, observedValues, samples);
  expect(within1Percent(0.849, approx)).toBeTruthy();

  approx = infer(network, { JOHN_CALLS: "F" }, observedValues, samples);
  expect(within1Percent(0.151, approx)).toBeTruthy();

  approx = infer(network, { MARY_CALLS: "T" }, observedValues, samples);
  expect(within1Percent(0.6586, approx)).toBeTruthy();

  approx = infer(network, { MARY_CALLS: "F" }, observedValues, samples);
  expect(within1Percent(0.3414, approx)).toBeTruthy();
};

const infersAlarmGiveAlarmTrue = (infer: Infer) => {
  const observedValues = { ALARM: "T" };
  let approx = 0;

  approx = infer(network, { EARTHQUAKE: "T" }, observedValues, samples);
  expect(within1Percent(0.231, approx)).toBeTruthy();

  approx = infer(network, { EARTHQUAKE: "F" }, observedValues, samples);
  expect(within1Percent(0.769, approx)).toBeTruthy();

  approx = infer(network, { BURGLARY: "T" }, observedValues, samples);
  expect(within1Percent(0.3736, approx)).toBeTruthy();

  approx = infer(network, { BURGLARY: "F" }, observedValues, samples);
  expect(within1Percent(0.6264, approx)).toBeTruthy();

  approx = infer(network, { JOHN_CALLS: "T" }, observedValues, samples);
  expect(within1Percent(0.9, approx)).toBeTruthy();

  approx = infer(network, { JOHN_CALLS: "F" }, observedValues, samples);
  expect(within1Percent(0.1, approx)).toBeTruthy();

  approx = infer(network, { MARY_CALLS: "T" }, observedValues, samples);
  expect(within1Percent(0.7, approx)).toBeTruthy();

  approx = infer(network, { MARY_CALLS: "F" }, observedValues, samples);
  expect(within1Percent(0.3, approx)).toBeTruthy();
};

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Likelihood Weighting": likelihoodWeighting.infer,
};

const tests: { [key: string]: (infer: Infer) => void } = {
  "infers given Burglary True": inferAlarmGiveBurglaryTrue,
  "infers given Alarm True": infersAlarmGiveAlarmTrue,
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
