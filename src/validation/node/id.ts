import { isNil, toString, type } from "ramda";

import { Node } from "../../types/Node";
import { isNotString } from "../../utils/functions";

export default (node: Node) => {
  if (isNil(node.id)) {
    throw new Error(`The node id is required and must be a string.

Node: ${toString(node)}`);
  }

  if (isNotString(node.id)) {
    throw new Error(`The node id must be a string.

Node id type: ${type(node.id)}
Node id: ${toString(node.id)}
Node: ${toString(node)}`);
  }
};
