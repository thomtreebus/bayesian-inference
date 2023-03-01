export interface CptRow {
  condition: { [key: string]: string };
  probability: { [key: string]: number };
}

export type CptWithParents = Array<CptRow>;

export interface CptWithoutParents {
  [key: string]: number;
}
