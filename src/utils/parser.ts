import { CptWithParents, CptWithoutParents, Node } from "../types";

export const parseNodesFromJSON = (nodes: any): Node[] => {
  const parsedNodes: Node[] = [];

  nodes.array.forEach((node: string) => {
    const newNode: Node = JSON.parse(node)
    parsedNodes.push(newNode);
  //   const newNode: Node = {
  //     id: node["id"],
  //     states: node["states"],
  //     parents: node["parents"],
  //     cpt: parseCpt(node["cpt"]),
  //   };
  // });

  return parsedNodes;
};
