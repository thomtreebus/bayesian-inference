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
  // expect(infer(network, { RAIN: "F" }, given, 0).toFixed(4)).toBe("0.9938");
  // expect(infer(network, { GRASS_WET: "T" }, given, 0).toFixed(4)).toBe(
  //   "0.9006"
  // );
  // expect(infer(network, { GRASS_WET: "F" }, given, 0).toFixed(4)).toBe(
  //   "0.0994"
  // );
};

// const inferGivenSmoker = (infer: Infer) => {
//   const observedValues = { SMOKER: "T" };
//   let approx = infer(network, { POLLUTION: "HIGH" }, observedValues, samples);
//   expect(within10Percent(0.002, approx)).toBeTruthy();

//   expect(true).toBeTruthy();
//   //   const given = { SMOKER: "T" };

//   //   expect(infer(network, { POLLUTION: "HIGH" }, given, samples).toFixed(4)).toBe(
//   //     "0.0020"
//   //   );
// };

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Likelihood Weighting": likelihoodWeighting.infer,
};

const tests: { [key: string]: (infer: Infer) => void } = {
  "infers given sprinkler true": infersGiveSprinklerTrue,
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
