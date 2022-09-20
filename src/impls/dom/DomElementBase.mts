import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotFoundErrorDomException,
  NotSupportedErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.js";
import type { DDomShadowRootInit } from "@/specs/dom/dictionaries/DDomShadowRootInit.js";
import type { IDomAttr } from "@/specs/dom/interfaces/IDomAttr.js";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { HtmlHTMLSlotElement } from "../html/HtmlHTMLSlotElement.js";
import { DomAttr } from "./DomAttr.js";
import { DomDOMTokenList } from "./DomDOMTokenList.js";
import { DomElement } from "./DomElement.js";
import { DomNamedNodeMap } from "./DomNamedNodeMap.js";
import { DomNode } from "./DomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";
import { DomShadowRoot } from "./DomShadowRoot.js";

export abstract class DomElementBase<N extends Element>
  extends DomNodeBase<N>
  implements IDomElement<N>
{
  get namespaceURI(): O.Option<string> {
    return O.fromNullable(this.native.namespaceURI);
  }
  get prefix(): O.Option<string> {
    return O.fromNullable(this.native.prefix);
  }
  get localName(): string {
    return this.native.localName;
  }
  get tagName(): string {
    return this.native.tagName;
  }

  get id(): string {
    return this.native.id;
  }
  set id(id: string) {
    this.native.id = id;
  }
  get className(): string {
    return this.native.className;
  }
  set className(className: string) {
    this.native.className = className;
  }
  private classListInternal: O.Option<DomDOMTokenList> = O.none;
  get classList(): DomDOMTokenList {
    return pipe(
      this.classListInternal,
      O.getOrElse(() => {
        const classList = new DomDOMTokenList(this.native.classList);

        this.classListInternal = O.some(classList);

        return classList;
      })
    );
  }
  get slot(): string {
    return this.native.slot;
  }
  set slot(slot: string) {
    this.native.slot = slot;
  }

  hasAttributes(): boolean {
    return this.native.hasAttributes();
  }
  private attributesInternal: O.Option<DomNamedNodeMap> = O.none;
  get attributes(): DomNamedNodeMap {
    return pipe(
      this.attributesInternal,
      O.getOrElse(() => {
        const attributes = new DomNamedNodeMap(this.native.attributes);

        this.attributesInternal = O.some(attributes);

        return attributes;
      })
    );
  }
  getAttributeNames(): string[] {
    return this.native.getAttributeNames();
  }
  getAttribute(qualifiedName: string): O.Option<string> {
    return pipe(this.native.getAttribute(qualifiedName), O.fromNullable);
  }
  getAttributeNS(
    namespace: string | null,
    localName: string
  ): O.Option<string> {
    return pipe(
      [namespace, localName] as const,
      (params) => this.native.getAttributeNS(...params),
      O.fromNullable
    );
  }
  setAttribute(
    qualifiedName: string,
    value: string
  ): E.Either<InvalidCharacterErrorDomException, void> {
    return pipe(
      [qualifiedName, value] as const,
      E.tryCatchK(
        (params) => this.native.setAttribute(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidCharacterErrorDomException
      )
    );
  }
  setAttributeNS(
    namespace: string | null,
    localName: string,
    value: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    void
  > {
    return pipe(
      [namespace, localName, value] as const,
      E.tryCatchK(
        (params) => this.native.setAttributeNS(...params),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidCharacterErrorDomException
            | NamespaceErrorDomException
      )
    );
  }
  removeAttribute(qualifiedName: string): void {
    this.native.removeAttribute(qualifiedName);
  }
  removeAttributeNS(namespace: string | null, localName: string): void {
    pipe([namespace, localName] as const, (params) =>
      this.native.removeAttributeNS(...params)
    );
  }
  toggleAttribute(
    qualifiedName: string,
    force?: boolean
  ): E.Either<InvalidCharacterErrorDomException, boolean> {
    return pipe(
      [qualifiedName, force] as const,
      E.tryCatchK(
        (params) => this.native.toggleAttribute(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidCharacterErrorDomException
      )
    );
  }
  hasAttribute(qualifiedName: string): boolean {
    return this.native.hasAttribute(qualifiedName);
  }
  hasAttributeNS(namespace: string | null, localName: string): boolean {
    return pipe([namespace, localName] as const, (params) =>
      this.native.hasAttributeNS(...params)
    );
  }

  getAttributeNode(qualifiedName: string): O.Option<DomAttr> {
    return pipe(
      this.native.getAttributeNode(qualifiedName),
      O.fromNullable,
      O.map((attr) => new DomAttr(attr))
    );
  }
  getAttributeNodeNS(
    namespace: string | null,
    localName: string
  ): O.Option<DomAttr> {
    return pipe(
      [namespace, localName] as const,
      O.fromNullableK((params) => this.native.getAttributeNodeNS(...params))
    );
  }
  setAttributeNode(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>> {
    return pipe(
      attr instanceof Attr ? attr : attr.getNative(),
      O.fromNullableK((attr) => this.setAttributeNode(attr)),
      O.map((attr) => new DomAttr(attr))
    );
  }
  setAttributeNodeNS(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>> {
    return pipe(
      attr instanceof Attr ? attr : attr.getNative(),
      O.fromNullableK((attr) => this.setAttributeNodeNS(attr)),
      O.map((attr) => new DomAttr(attr))
    );
  }
  removeAttributeNode(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<NotFoundErrorDomException, IDomAttr<Attr>> {
    return pipe(
      attr instanceof Attr ? attr : attr.getNative(),
      E.tryCatchK(
        (attr) => this.native.removeAttributeNode(attr),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      ),
      E.map((attr) => new DomAttr(attr))
    );
  }

  attachShadow(
    init: DDomShadowRootInit
  ): E.Either<NotSupportedErrorDomException, DomShadowRoot> {
    return pipe(
      E.tryCatch(
        () => this.native.attachShadow(init),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      E.map((shadowRoot) => new DomShadowRoot(shadowRoot))
    );
  }
  get shadowRoot(): O.Option<DomShadowRoot> {
    return pipe(
      O.fromNullable(this.native.shadowRoot),
      O.map((shadowRoot) => new DomShadowRoot(shadowRoot))
    );
  }

  closest(
    selectors: string
  ): E.Either<SyntaxErrorDomException, O.Option<DomElement>> {
    return pipe(
      E.tryCatch(
        () => this.native.closest(selectors),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SyntaxErrorDomException
      ),
      E.map((element) =>
        pipe(
          O.fromNullable(element),
          O.map((element) => new DomElement(element))
        )
      )
    );
  }
  matches(selectors: string): E.Either<SyntaxErrorDomException, boolean> {
    return pipe(
      E.tryCatch(
        () => this.native.matches(selectors),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SyntaxErrorDomException
      )
    );
  }

  getElementsByTagName(qualifiedName: string): DomElement[] {
    return pipe(
      this.native.getElementsByTagName(qualifiedName),
      (collection) => Array.from(collection),
      A.map((element) => new DomElement(element))
    );
  }
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): DomElement[] {
    return pipe(
      [namespace, localName] as const,
      (params) => this.native.getElementsByTagNameNS(...params),
      (collection) => Array.from(collection),
      A.map((element) => new DomElement(element))
    );
  }
  getElementsByClassName(classNames: string): DomElement[] {
    return pipe(
      this.native.getElementsByClassName(classNames),
      (collection) => Array.from(collection),
      A.map((element) => new DomElement(element))
    );
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
      this.native.querySelector(selectors),
      O.fromNullable,
      O.map((element) => new DomElement(element))
    );
  }
  querySelectorAll(selectors: string): DomNode[] {
    return pipe(
      this.native.querySelectorAll(selectors),
      (list) => Array.from(list),
      A.map((node) => new DomNode(node))
    );
  }

  get previousElementSibling(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.previousElementSibling),
      O.map((element) => new DomElement(element))
    );
  }
  get nextElementSibling(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.nextElementSibling),
      O.map((element) => new DomElement(element))
    );
  }

  before(
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
        (params) => this.native.before(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  after(
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
        (params) => this.native.after(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  replaceWith(
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
        (params) => this.native.replaceWith(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  remove(): void {
    this.native.remove();
  }

  get assignedSlot(): O.Option<HtmlHTMLSlotElement> {
    return pipe(
      O.fromNullable(this.native.assignedSlot),
      O.map((element) => new HtmlHTMLSlotElement(element))
    );
  }
}
