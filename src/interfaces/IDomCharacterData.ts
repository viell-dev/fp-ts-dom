import { MDomChildNode } from "../mixins/MDomChildNode.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomCharacterData<N extends CharacterData>
  extends IDomNode<N>,
    MDomChildNode {
  data: string;
  readonly length: number;
  substringData(offset: number, count: number): string;
  appendData(data: string): void;
  insertData(offset: number, data: string): void;
  deleteData(offset: number, count: number): void;
  replaceData(offset: number, count: number, data: string): void;
}
