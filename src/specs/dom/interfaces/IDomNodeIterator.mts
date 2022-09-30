import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomNodeIterator<N extends NodeIterator> extends IWrapper<N> {
  readonly root: IDomNode<Node>;
  readonly referenceNode: IDomNode<Node>;
  readonly pointerBeforeReferenceNode: boolean;
  readonly whatToShow: CDomNodeFilterWhatToShow;
  readonly filter: O.Option<CBDomNodeFilter>;

  nextNode(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;
}
