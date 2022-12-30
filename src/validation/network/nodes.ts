import { Network, Node } from "../../types";
import validNodeId from "../node";
import validNodeCpt from "../node";
import validNodeParents from "../node";
import validNodeStates from "../node";

export default (network: Network) => {
  Object.keys(network).forEach(function (key) {
    const node: Node = network[key];
    validNodeId(node, network);
    validNodeStates(node, network);
    validNodeParents(node, network);
    validNodeCpt(node, network);
  });
};
