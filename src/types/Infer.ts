import { Combinations, Network } from ".";

export interface Infer {
  (network: Network, nodes: Combinations, given?: Combinations): number;
}
