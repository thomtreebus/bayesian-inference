import { Infer } from "../../src/types";

// import { allNodes } from "../../networks/big-network";
import { alarmNodes } from "../../networks/alarm";
import { asiaNodes } from "../../networks/asia";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";
const { likelihoodWeighting, variableElimination } = inferenceAlgorithms;
const { convertArrayToCSV } = require("convert-array-to-csv");
const converter = require("convert-array-to-csv");
const fs = require("fs");

function percentError(target: number, output: number): number {
  const error = (target - output) / target;
  return Math.abs(error);
  // return Math.abs(error * 100);
}

function standardDeviation(array: number[]) {
  const n = array.length;
  const mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

const sampleSize = 10000;
console.log("evaluating....");

const sampleSizes = [100, 250, 500, 750, 1000, 1500, 2500, 5000, 7500, 10000];
const alarmNet = createNetwork(...alarmNodes);
const asiaNet = createNetwork(...asiaNodes);
// const bigNet = createNetwork(...allNodes);

// let res = [];
// const target = 0.23269281903064404;
// for (const sampleSize of sampleSizes) {
//   console.log("samples:", sampleSize);
//   let total = 0;
//   let values = [];
//   for (let i = 0; i < 100; i++) {
//     const prob = likelihoodWeighting.infer(
//       alarmNet,
//       { PRESS: "NORMAL" },
//       { VENTMATCH: "NORMAL", DISCONNECT: "FALSE" },
//       sampleSize
//     );
//     total += prob;
//     values.push(prob);
//   }
//   const avg = total / 100;
//   const error = percentError(target, avg);
//   const sd = standardDeviation(values);
//   res.push([sampleSize, error, sd]);
// }

let total = 0;
const target = 0.500237791366289;
let startTime = performance.now();
for (let i = 0; i < 100; i++) {
  const prob = likelihoodWeighting.infer(
    asiaNet,
    { PRESS: "NORMAL" },
    { VENTMACH: "NORMAL", DISCONNECT: "FALSE" },
    100
  );
  console.log(prob);
  total += prob;
}
let endTime = performance.now();
const average = total / 100;
const pe = percentError(target, average);

console.log(
  "average time taken LW : ",
  (endTime - startTime) / 100,
  " milliseconds"
);
console.log("error", pe);

// console.log(prob);
// // const pe = percentError(target, average);
// console.log("finished!");
// console.log(res);
// const header = ["Sample Size", "Error", "Standard Deviation"];
// const csv = convertArrayToCSV(res, {
//   header,
//   seperator: ";",
// });
// // console.log(csv);

// try {
//   fs.writeFileSync("test.csv", csv);
//   console.log("file written successfully!");
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }
