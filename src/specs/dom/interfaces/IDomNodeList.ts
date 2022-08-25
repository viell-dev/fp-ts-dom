import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IDomNode } from "./IDomNode.js";

export interface IDomNodeList<N extends NodeList>
  extends Iterable<IDomNode<Node>>,
    IWrapper<N> {
  item(index: number): O.Option<IDomNode<Node>>;
  // TODO: Can we impl `[index: number]: O.Option<IDomNode<Node>>` somehow?
  readonly length: number;
}
