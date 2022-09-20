import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.js";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomNodeIterator<N extends NodeIterator> extends IWrapper<N> {
  readonly root: IDomNode<Node>;
  readonly referenceNode: IDomNode<Node>;
  readonly pointerBeforeReferenceNode: boolean;
  readonly whatToShow: CDomNodeFilterWhatToShow;
  readonly filter: O.Option<CBDomNodeFilter>;

  nextNode(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;
}
