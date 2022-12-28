import { Network, Node } from "../../types";

// Validations for each node attribute
import validNodeId from "./id";
import validNodeStates from "./states";
import validNodeParents from "./parents";
import validNodeCpt from "./cpt";

export default (node: Node, network: Network) => {
  validNodeId(node);
  validNodeStates(node);
  validNodeParents(node, network);
  validNodeCpt(node, network);
};
