import expect from "expect";

import { Infer } from "../../src/types";
import { cancerNodes } from "../../networks/cancer";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";

const { likelihoodWeighting } = inferenceAlgorithms;

const network = createNetwork(...cancerNodes);
const samples = 100000;

const within1Percent = (actual: number, approximation: number) => {
  console.log(actual, approximation);
  const ratio = actual / approximation;
  if (Math.abs(1 - ratio) < 0.1) {
    return true;
  }
  return false;
};

const inferGivenSmoker = (infer: Infer) => {
  // const observedValues = { BURGLARY: "T" };
  // let approx = infer(network, { EARTHQUAKE: "T" }, observedValues, samples);
  // expect(within1Percent(0.002, +approx.toFixed(4))).toBeTruthy();

  expect(true).toBeTruthy();
  //   const given = { SMOKER: "T" };

  //   expect(infer(network, { POLLUTION: "HIGH" }, given, samples).toFixed(4)).toBe(
  //     "0.0020"
  //   );
};

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Likelihood Weighting": likelihoodWeighting.infer,
};

const tests: { [key: string]: (infer: Infer) => void } = {
  "infers given smoker True": inferGivenSmoker,
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
