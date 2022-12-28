import { Network, Node } from "../../types";

// import validNodeCpt from "./cpt";
import validNodeId from "./id";
import validNodeStates from "./states";
import validNodeParents from "./parents";

export default (node: Node, network: Network) => {
  validNodeId(node);
  validNodeStates(node);
  validNodeParents(node, network);
  //   validNodeCpt(node, network);
};
