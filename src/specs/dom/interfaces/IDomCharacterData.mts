import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { MDomChildNode } from "../mixins/MDomChildNode.mjs";
import type { MDomNonDocumentTypeChildNode } from "../mixins/MDomNonDocumentTypeChildNode.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomCharacterData<N extends CharacterData>
  extends IDomNode<N>,
    MDomNonDocumentTypeChildNode,
    MDomChildNode {
  data: string;
  readonly length: number;
  substringData(offset: number, count: number): E.Either<RangeError, string>;
  appendData(data: string): O.Option<RangeError>;
  insertData(offset: number, data: string): O.Option<RangeError>;
  deleteData(offset: number, count: number): O.Option<RangeError>;
  replaceData(
    offset: number,
    count: number,
    data: string
  ): O.Option<RangeError>;
}
