import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.js";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomTreeWalker<N extends TreeWalker> extends IWrapper<N> {
  readonly root: IDomNode<Node>;
  readonly whatToShow: CDomNodeFilterWhatToShow;
  readonly filter: O.Option<CBDomNodeFilter>;
  currentNode: IDomNode<Node>;

  parentNode(): O.Option<IDomNode<Node>>;
  firstChild(): O.Option<IDomNode<Node>>;
  lastChild(): O.Option<IDomNode<Node>>;
  previousSibling(): O.Option<IDomNode<Node>>;
  nextSibling(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;
  nextNode(): O.Option<IDomNode<Node>>;
}
