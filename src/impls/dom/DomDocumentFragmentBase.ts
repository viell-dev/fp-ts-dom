import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.js";
import type { IDomDocumentFragment } from "@/specs/dom/interfaces/IDomDocumentFragment.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "./DomElement.js";
import { DomNode } from "./DomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";

export abstract class DomDocumentFragmentBase<N extends DocumentFragment>
  extends DomNodeBase<N>
  implements IDomDocumentFragment<N>
{
  getElementById(elementId: string): O.Option<DomElement> {
    return pipe(this.native.getElementById(elementId), O.fromNullable);
  }

  get children(): DomElement[] {
    return pipe(
      Array.from(this.native.children),
      A.map((element) => new DomElement(element))
    );
  }
  get firstElementChild(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.firstElementChild),
      O.map((element) => new DomElement(element))
    );
  }
  get lastElementChild(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.lastElementChild),
      O.map((element) => new DomElement(element))
    );
  }
  get childElementCount(): number {
    return this.native.childElementCount;
  }

  prepend(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.prepend(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  append(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.append(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  replaceChildren(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.replaceChildren(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }

  querySelector(selectors: string): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.querySelector(selectors)),
      O.map((element) => new DomElement(element))
    );
  }
  querySelectorAll(selectors: string): IDomNode<Node>[] {
    return pipe(
      Array.from(this.native.querySelectorAll(selectors)),
      A.map((node) => new DomNode(node))
    );
  }
}
