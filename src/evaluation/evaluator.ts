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
