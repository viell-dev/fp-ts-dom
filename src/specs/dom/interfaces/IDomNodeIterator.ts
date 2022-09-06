import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IDomNode } from "./IDomNode.js";

export interface IDomNodeIterator<N extends NodeIterator> extends IWrapper<N> {
  readonly root: IDomNode<Node>;
  readonly referenceNode: IDomNode<Node>;
  readonly pointerBeforeReferenceNode: boolean;
  readonly whatToShow: number;
  readonly filter: NodeFilter | null;

  nextNode(): O.Option<IDomNode<Node>>;
  previousNode(): O.Option<IDomNode<Node>>;

  detach(): void;
}
