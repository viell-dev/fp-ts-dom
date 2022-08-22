import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomTreeWalker<N extends TreeWalker> extends IDom<N> {
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
