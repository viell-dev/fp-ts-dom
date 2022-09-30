import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.mjs";
import type { IDomNode } from "./IDomNode.mjs";

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
