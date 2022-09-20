import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
import type { IDomNode } from "../interfaces/IDomNode.mjs";

export interface MDomChildNode {
  before(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  after(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  replaceWith(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  remove(): void;
}
