import { Network, Node } from "../../types";
import { forEach, has, isNil, toString, type } from "ramda";

import { isNotString } from "../../utils/functions";

const checkIfParentsExist = ({ id, parents }: Node, network: Network) => {
  forEach((parentId) => {
    if (isNotString(parentId)) {
      throw new Error(
        `[Node "${id}"]: Parents must be strings. Node parent type: ${type(
          parentId
        )}. Node parent: ${toString(parentId)}. Node parents: ${toString(
          parents
        )}`
      );
    }

    if (!has(parentId, network)) {
      throw new Error(
        `[Node "${id}"]: Parent node "${parentId}" was not found in the network.`
      );
    }
  }, parents);
};

export default (node: Node, network: Network) => {
  if (isNil(node.parents)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: Parents is required and must be an array of strings. Node: ${toString(
        node
      )}`
    );
  }

  if (!Array.isArray(node.parents)) {
    throw new Error(
      `[Node "${
        node.id
      }"]: Parents must be an array of strings. Node parents type: ${type(
        node.parents
      )}. Node parents: ${toString(node.parents)}`
    );
  }

  checkIfParentsExist(node, network);
};
