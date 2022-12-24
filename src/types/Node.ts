import { CptWithParents, CptWithoutParents } from "./Cpt";

export interface Node {
  id: string;
  states: string[];
  parents: string[];
  cpt: CptWithParents | CptWithoutParents;
}
