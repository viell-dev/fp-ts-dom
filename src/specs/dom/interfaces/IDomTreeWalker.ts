import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IDomNode } from "./IDomNode.js";

export interface IDomTreeWalker<N extends TreeWalker> extends IWrapper<N> {
  readonly root: IDomNode<Node>;
  readonly whatToShow: number;
  readonly filter: NodeFilter | null;
  currentNode: IDomNode<Node>;

  parentNode(): O.Option<IDomNode<Node>>;
  firstChild(): O.Option<IDomNode<Node>>;
  lastChild(): O.Option<IDomNode<Node>>;
  previousSibling(): O.Option<IDomNode<Node>>;
  nextSibling(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;
  nextNode(): O.Option<IDomNode<Node>>;
}
