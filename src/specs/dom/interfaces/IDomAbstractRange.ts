import { IWrapper } from "@/wrapper/IWrapper.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomAbstractRange<N extends AbstractRange>
  extends IWrapper<N> {
  readonly startContainer: IDomNode<Node>;
  readonly startOffset: number;
  readonly endContainer: IDomNode<Node>;
  readonly endOffset: number;
  readonly collapsed: boolean;
}
