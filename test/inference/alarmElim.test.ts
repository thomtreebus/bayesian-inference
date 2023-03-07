import expect from "expect";

import { Infer } from "../../src/types";
import { allNodes } from "../../networks/alarm";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";

const { variableElimination } = inferenceAlgorithms;

const network = createNetwork(...allNodes);
const samples = 0;

const within1Percent = (actual: number, approximation: number) => {
  console.log(actual, approximation);
  const ratio = actual / approximation;
  if (Math.abs(1 - ratio) < 0.1) {
    return true;
  }
  return false;
};

const inferAlarmGiveBurglaryTrue = (infer: Infer) => {
  expect(true).toBeTruthy();
  const given = { BURGLARY: "T" };

  expect(infer(network, { EARTHQUAKE: "T" }, given, samples).toFixed(4)).toBe(
    "0.0020"
  );
  expect(infer(network, { EARTHQUAKE: "F" }, given, samples).toFixed(4)).toBe(
    "0.9980"
  );
  expect(infer(network, { ALARM: "T" }, given, samples).toFixed(4)).toBe(
    "0.9400"
  );
  expect(infer(network, { ALARM: "F" }, given, samples).toFixed(4)).toBe(
    "0.0600"
  );
  expect(infer(network, { JOHN_CALLS: "T" }, given, samples).toFixed(4)).toBe(
    "0.8490"
  );
  expect(infer(network, { JOHN_CALLS: "F" }, given, samples).toFixed(4)).toBe(
    "0.1510"
  );
  expect(infer(network, { MARY_CALLS: "T" }, given, samples).toFixed(4)).toBe(
    "0.6586"
  );
  expect(infer(network, { MARY_CALLS: "F" }, given, samples).toFixed(4)).toBe(
    "0.3414"
  );
};

const infersAlarmGiveAlarmTrue = (infer: Infer) => {
  const given = { ALARM: "T" };
  expect(infer(network, { BURGLARY: "T" }, given, 0).toFixed(4)).toBe("0.3736");
  expect(infer(network, { BURGLARY: "F" }, given, 0).toFixed(4)).toBe("0.6264");
  expect(infer(network, { EARTHQUAKE: "T" }, given, 0).toFixed(4)).toBe(
    "0.2310"
  );
  expect(infer(network, { EARTHQUAKE: "F" }, given, 0).toFixed(4)).toBe(
    "0.7690"
  );
  expect(infer(network, { JOHN_CALLS: "T" }, given, 0).toFixed(4)).toBe(
    "0.9000"
  );
  expect(infer(network, { JOHN_CALLS: "F" }, given, 0).toFixed(4)).toBe(
    "0.1000"
  );
  expect(infer(network, { MARY_CALLS: "T" }, given, 0).toFixed(4)).toBe(
    "0.7000"
  );
  expect(infer(network, { MARY_CALLS: "F" }, given, 0).toFixed(4)).toBe(
    "0.3000"
  );
};

const inferenceAlgorithmNames: { [key: string]: Infer } = {
  "Variable Elimination": variableElimination.infer,
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
