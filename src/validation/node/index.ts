import { Network, Node } from "../../types";

// import validNodeCpt from "./cpt";
import validNodeId from "./id";
// import validNodeParents from "./parents";
// import validNodeStates from "./states";

export default (node: Node, network: Network) => {
  validNodeId(node);
  //   validNodeStates(node);
  //   validNodeParents(node, network);
  //   validNodeCpt(node, network);
};
