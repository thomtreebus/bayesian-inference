import expect from "expect";

import { Infer } from "../../src/types";
import { allNodes } from "../../networks/alarm";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";

const { likelihoodWeighting } = inferenceAlgorithms;

const network = createNetwork(...allNodes);

const inferAlarmGiveBurglaryTrue = (infer: Infer) => {
  const observedValues = { BURGLARY: "T" };

  // expect(infer(network, { EARTHQUAKE: "T" }, observedValues).toFixed(4)).toBe(
  //   "0.0020"
  // );
  expect(infer(network, { EARTHQUAKE: "F" }, observedValues).toFixed(4)).toBe(
    "0.9980"
  );
  //   expect(infer(network, { ALARM: "T" }, observedValues).toFixed(4)).toBe("0.9400");
  //   expect(infer(network, { ALARM: "F" }, observedValues).toFixed(4)).toBe("0.0600");
  //   expect(infer(network, { JOHN_CALLS: "T" }, observedValues).toFixed(4)).toBe("0.8490");
  //   expect(infer(network, { JOHN_CALLS: "F" }, observedValues).toFixed(4)).toBe("0.1510");
  //   expect(infer(network, { MARY_CALLS: "T" }, observedValues).toFixed(4)).toBe("0.6586");
  //   expect(infer(network, { MARY_CALLS: "F" }, observedValues).toFixed(4)).toBe("0.3414");
};

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Likelihood Weighting": likelihoodWeighting.infer,
};

const tests: { [key: string]: (infer: Infer) => void } = {
  "infers given Burglary True": inferAlarmGiveBurglaryTrue,
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
