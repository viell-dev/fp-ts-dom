import type * as O from "fp-ts/Option";
import type { HierarchyRequestErrorDomException } from "../../../exceptions/DomException.mjs";
import type { IDomNode } from "../interfaces/IDomNode.mjs";

export interface MDomChildNode {
  before(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException>;
  after(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException>;
  replaceWith(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException>;
  remove(): void;
}
