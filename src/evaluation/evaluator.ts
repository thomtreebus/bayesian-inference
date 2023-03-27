import { Infer } from "../../src/types";
import { alarmNodes } from "../../networks/alarm";
// import { allNodes } from "../../networks/big-network";
import { DISCONNECT, allNodes } from "../../networks/alarm2";
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

const network = createNetwork(...alarmNodes);
const sampleSize = 10000;
console.log("evaluating....");

const sampleSizes = [100, 250, 500, 1000, 5000, 10000];
const alarmNet = createNetwork(...allNodes);
const asiaNet = createNetwork(...asiaNodes);
// const target = 0.2327;
// const pe = percentError(target, average);

const trials = 10;
let res = [];
const target = 0.23269281903064404;
for (let i = 1000; i <= 100000; i += 1000) {
  const sampleSize = i;
  console.log("sample:", sampleSize);
  let total = 0;
  // for (let i = 0; i < 3; i++) {
  const prob = likelihoodWeighting.infer(
    alarmNet,
    { PRESS: "NORMAL" },
    { VENTMATCH: "NORMAL", DISCONNECT: "FALSE" },
    sampleSize
  );
  total += prob;
  // }
  console.log("total", total);
  // const avg = total / 3;
  const error = percentError(target, prob);
  console.log(prob, error);
  res.push([sampleSize, error]);
}
// let startTime = performance.now();
// for (let i = 0; i < 3; i++) {
//   const prob = variableElimination.infer(
//     alarmNet,
//     { SAO2: "NORMAL" },
//     { INTUBATION: "NORMAL", FIO2: "NORMAL" },
//     sampleSize
//   );
//   console.log(prob);
// }
// let endTime = performance.now();
// console.log(
//   "average time taken VE : ",
//   (endTime - startTime) / 3,
//   " milliseconds"
// );

// let total = 0;
// const target = 0.023957663107750715;
// let startTime = performance.now();
// for (let i = 0; i < 100; i++) {
//   const prob = likelihoodWeighting.infer(
//     alarmNet,
//     { SAO2: "NORMAL" },
//     { INTUBATION: "NORMAL", FIO2: "NORMAL" },
//     10000
//   );
//   total += prob;
// }
// let endTime = performance.now();
// const average = total / 100;
// const pe = percentError(target, average);

// console.log(
//   "average time taken LW : ",
//   (endTime - startTime) / 100,
//   " milliseconds"
// );
// console.log("error", pe);

// console.log(prob);
// // const pe = percentError(target, average);
// console.log("finished!");
// console.log(res);

const header = ["Sample Size", "Error"];
const csv = convertArrayToCSV(res, {
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
