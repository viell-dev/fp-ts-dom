import { HierarchyRequestErrorDomException } from "@/exceptions/DomException.js";
import * as E from "fp-ts/Either";
import * as O from "fp-ts/Option";
import { IDomElement } from "../interfaces/IDomElement.js";
import { IDomHTMLCollection } from "../interfaces/IDomHTMLCollection.js";
import { IDomNode } from "../interfaces/IDomNode.js";
import { IDomNodeList } from "../interfaces/IDomNodeList.js";

export interface MDomParentNode {
  readonly children: IDomHTMLCollection<HTMLCollection>;
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
  querySelectorAll(selectors: string): IDomNodeList<NodeList>;
}
