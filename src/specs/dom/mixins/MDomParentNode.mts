import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { IDomElement } from "../interfaces/IDomElement.mjs";
import type { IDomNode } from "../interfaces/IDomNode.mjs";

export interface MDomParentNode {
  readonly children: IDomElement<Element>[];
  readonly firstElementChild: O.Option<IDomElement<Element>>;
  readonly lastElementChild: O.Option<IDomElement<Element>>;
  readonly childElementCount: number;

  prepend(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  append(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  replaceChildren(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;

  querySelector(selectors: string): O.Option<IDomElement<Element>>;
  querySelectorAll(selectors: string): IDomNode<Node>[];
}
