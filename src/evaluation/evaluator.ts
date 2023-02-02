import { Infer } from "../../src/types";
import { allNodes } from "../../networks/alarm";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";
const { likelihoodWeighting } = inferenceAlgorithms;
const { convertArrayToCSV } = require("convert-array-to-csv");
const converter = require("convert-array-to-csv");
const fs = require("fs");

const network = createNetwork(...allNodes);
const sampleSize = 10000;
console.log("evaluating....");

// const sampleSizes = [
//   10, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000,
// ];
const results = [];
const sampleSizes = [10, 100, 500, 1000];
for (let sampleSize = 1; sampleSize < 10000; sampleSize++) {
  const observedValues = { BURGLARY: "T" };
  results.push([
    sampleSize,
    likelihoodWeighting
      .infer(network, { MARY_CALLS: "T" }, observedValues, sampleSize)
      .toFixed(4),
  ]);
}

console.log("finished!");
console.log(results);

const header = ["Sample Size", "Output"];
const csv = convertArrayToCSV(results, {
  header,
  seperator: ";",
});
// console.log(csv);

try {
  fs.writeFileSync("test.csv", csv);
  console.log("file written successfully!");
  // file written successfully
} catch (err) {
  console.error(err);
}
