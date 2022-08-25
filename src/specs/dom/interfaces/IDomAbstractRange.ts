import type { IWrapper } from "@/global/IWrapper.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomAbstractRange<N extends AbstractRange>
  extends IWrapper<N> {
  readonly startContainer: IDomNode<Node>;
  readonly startOffset: number;
  readonly endContainer: IDomNode<Node>;
  readonly endOffset: number;
  readonly collapsed: boolean;
}
