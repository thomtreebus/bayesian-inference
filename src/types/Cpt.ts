export interface CptItem {
  condition: { [key: string]: string };
  probability: { [key: string]: number };
}

export type CptWithParents = Array<CptItem>;

export interface CptWithoutParents {
  [key: string]: number;
}
