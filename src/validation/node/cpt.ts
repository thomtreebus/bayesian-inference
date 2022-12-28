import {
  Combinations,
  CptWithParents,
  CptWithoutParents,
  Network,
  Node,
} from "../../types";
import { isNotNumber, isNotObject } from "../../utils/functions";
import { buildCombinations } from "../../utils/combinations";
import { equals, forEach, isNil, none, pluck, toString, type } from "ramda";
import { CustomPromisify } from "util";

const mapProbability = pluck("condition");

const checkIfAllProbabilitiesArePresent = (
  id: string,
  states: string[],
  probabilities: CptWithoutParents
) => {
  forEach((state) => {
    if (isNil(probabilities[state])) {
      throw new Error(
        `[Node "${id}"]: Missing probability for "${state}" state. Cpt: ${toString(
          probabilities
        )}`
      );
    }

    if (isNotNumber(probabilities[state])) {
      throw new Error(
        `[Node "${id}"]: All probabilities must be a number. Cpt type for "${state}": ${type(
          probabilities[state]
        )}. Cpt for "${state}": ${toString(
          probabilities[state]
        )}. Cpt: ${toString(probabilities)}`
      );
    }
  }, states);
};

const checkInvalidCombinations = (
  nodeId: string,
  nodeCombinations: Combinations[],
  validCombinations: Combinations[]
) =>
  forEach((nodeCombination) => {
    const notExist = none(equals(nodeCombination), validCombinations);

    if (notExist) {
      console.warn(
        `[Node "${nodeId}"]: Cpt has one extra/invalid combination. Invalid cpt combination (condition): ${toString(
          nodeCombination
        )}. Cpt combinations (condition's): ${toString(
          nodeCombinations
        )}. Combinations needed: ${toString(validCombinations)}`
      );
    }
  }, nodeCombinations);

const checkMissingCombinations = (
  nodeId: string,
  nodeCombinations: Combinations[],
  validCombinations: Combinations[]
) =>
  forEach((combination) => {
    const notExist = none(equals(combination), nodeCombinations);

    if (notExist) {
      throw new Error(
        `[Node "${nodeId}"]: Cpt has one missing combination. Missing cpt combination (condition): ${toString(
          combination
        )}. Cpt combinations (condition's): ${toString(
          nodeCombinations
        )}. Combinations needed: ${toString(validCombinations)}`
      );
    }
  }, validCombinations);

const validCombinations = (node: Node, network: Network) => {
  const combinations = buildCombinations(network, node.parents);
  const nodeCombinations = mapProbability(node.cpt as CptWithParents);

  checkMissingCombinations(node.id, nodeCombinations, combinations);
  checkInvalidCombinations(node.id, nodeCombinations, combinations);
};

export default (node: Node, network: Network) => {
  if (isNil(node.cpt)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: Cpt is required and must be an object or an array. Node: ${toString(
        node
      )}`
    );
  }

  if (isNotObject(node.cpt)) {
    throw new Error(
      `[Node "${node.id}"]: Cpt must be an object or an array. Cpt type: ${type(
        node.cpt
      )}. Cpt: ${toString(node.cpt)}`
    );
  }

  if (Array.isArray(node.cpt)) {
    validCombinations(node, network);

    forEach((probabilities) => {
      checkIfAllProbabilitiesArePresent(
        node.id,
        node.states,
        probabilities.probability
      );
    }, node.cpt);
  } else {
    checkIfAllProbabilitiesArePresent(node.id, node.states, node.cpt);
  }
};
