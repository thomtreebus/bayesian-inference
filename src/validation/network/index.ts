import { Network, Node } from "../../types";

// Validations for each node attribute
import validNetwork from "./nodes";

export default (network: Network) => {
  validNetwork(network);
};
