import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.js";
import type * as E from "fp-ts/Either";
import type { IDomNode } from "../interfaces/IDomNode.js";

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
