import { Infer } from "../../src/types";
import { alarmNodes } from "../../networks/alarm";
import { allNodes } from "../../networks/big-network";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";
const { likelihoodWeighting, variableElimination } = inferenceAlgorithms;
const { convertArrayToCSV } = require("convert-array-to-csv");
const converter = require("convert-array-to-csv");
const fs = require("fs");

function percentError(target: number, output: number): number {
  const error = (target - output) / target;
  return error * 100;
}

const network = createNetwork(...alarmNodes);
const sampleSize = 10000;
console.log("evaluating....");

// const sampleSizes = [
//   10, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000,
// ];
const results = [];
// const sampleSizes = [10, 100, 500, 1000];
const observedValues = { BURGLARY: "T" };
const target = 0.6586;
const trials = 10;
let start = Date.now();
const result = likelihoodWeighting.infer(
  network,
  { MARY_CALLS: "T" },
  observedValues,
  1000
);
console.log(result);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

const bigNetwork = createNetwork(...allNodes);
const observed = { node1: "T", node2: "T" };
start = Date.now();
const res = variableElimination.infer(
  bigNetwork,
  { node10: "T" },
  observed,
  1000
);
console.log(res);
timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

// for (let sampleSize = 1000; sampleSize <= 100000; sampleSize += 1000) {
//   let total = 0;
//   console.log("sample:", sampleSize);
//   for (let i = 0; i < trials; i++) {
//     total += likelihoodWeighting.infer(
//       network,
//       { MARY_CALLS: "T" },
//       observedValues,
//       sampleSize
//     );
//   }
//   const average = total / trials;
//   const pe = percentError(target, average);

//   results.push([sampleSize, average.toFixed(4), pe.toFixed(4)]);
// }

console.log("finished!");
// console.log(results);

// const header = ["Sample Size", "Average over 10 trials", "% Error"];
// const csv = convertArrayToCSV(results, {
//   header,
//   seperator: ";",
// });
// // console.log(csv);

// try {
//   fs.writeFileSync("test2.csv", csv);
//   console.log("file written successfully!");
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }
