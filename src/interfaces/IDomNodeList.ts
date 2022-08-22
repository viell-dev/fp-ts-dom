import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomNodeList<N extends NodeList> extends IDom<N> {
  item(index: number): O.Option<IDomNode<Node>>;
  readonly length: number;
}
