import { Combinations, Network } from ".";

export interface Infer {
  (
    network: Network,
    nodes: Combinations,
    sampleSize: number,
    given?: Combinations
  ): number;
}
