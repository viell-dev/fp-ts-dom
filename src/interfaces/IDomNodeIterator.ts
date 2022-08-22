import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomNodeIterator<N extends NodeIterator> extends IDom<N> {
  readonly root: IDomNode<Node>;
  readonly referenceNode: IDomNode<Node>;
  readonly pointerBeforeReferenceNode: boolean;
  readonly whatToShow: number;
  readonly filter: NodeFilter | null;

  nextNode(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;

  detach(): void;
}
