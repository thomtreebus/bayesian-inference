export interface FactorItem {
  states: { [nodeId: string]: string };
  value: number;
}

export type Factor = Array<FactorItem>;
