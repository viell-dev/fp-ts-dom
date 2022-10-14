import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomAbstractRange<N extends AbstractRange>
  extends IWrapper<N> {
  readonly startContainer: IDomNode<Node>;
  readonly startOffset: number;
  readonly endContainer: IDomNode<Node>;
  readonly endOffset: number;
  readonly collapsed: boolean;
}
