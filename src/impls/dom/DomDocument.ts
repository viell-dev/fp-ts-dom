import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotSupportedErrorDomException,
} from "@/exceptions/DomException.js";
import { getNative } from "@/helpers/getNative.js";
import type { CBDomNodeFilter } from "@/specs/dom/callbacks/CBDomNodeFilter.js";
import type { CDomNodeFilterWhatToShow } from "@/specs/dom/constants/CDomNodeFilterWhatToShow.js";
import type { DDomElementCreationOptions } from "@/specs/dom/dictionaries/DDomElementCreationOptions.js";
import type {
  IDomDocument,
  IDomDocumentConstructors,
} from "@/specs/dom/interfaces/IDomDocument.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomAttr } from "./DomAttr.js";
import { DomCDATASection } from "./DomCDATASection.js";
import { DomComment } from "./DomComment.js";
import { DomDocumentFragment } from "./DomDocumentFragment.js";
import { DomDocumentType } from "./DomDocumentType.js";
import { DomDOMImplementation } from "./DomDOMImplementation.js";
import { DomElement } from "./DomElement.js";
import { DomNode } from "./DomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";
import { DomNodeIterator } from "./DomNodeIterator.js";
import { DomProcessingInstruction } from "./DomProcessingInstruction.js";
import { DomRange } from "./DomRange.js";
import { DomText } from "./DomText.js";
import { DomTreeWalker } from "./DomTreeWalker.js";

type CorrectedCreateElement = (
  localName: string,
  options?: string | ElementCreationOptions
) => Element;

@StaticImplements<IDomDocumentConstructors>()
export class DomDocument
  extends DomNodeBase<Document>
  implements IDomDocument<Document>
{
  constructor();
  constructor(document: Document);
  constructor(document?: Document) {
    const nativeDocument =
      document instanceof Document ? document : new Document();

    super(nativeDocument);
  }

  private implementationInternal: O.Option<DomDOMImplementation> = O.none;
  get implementation(): DomDOMImplementation {
    return pipe(
      this.implementationInternal,
      O.getOrElse(() => {
        const implementation = new DomDOMImplementation(
          this.native.implementation
        );
        this.implementationInternal = O.some(implementation);
        return implementation;
      })
    );
  }
  get URL(): string {
    return this.native.URL;
  }
  get documentURI(): string {
    return this.native.documentURI;
  }
  get compatMode(): string {
    return this.native.compatMode;
  }
  get characterSet(): string {
    return this.native.characterSet;
  }
  get contentType(): string {
    return this.native.contentType;
  }

  get doctype(): O.Option<DomDocumentType> {
    return pipe(
      O.fromNullable(this.native.doctype),
      O.map((doctype) => new DomDocumentType(doctype))
    );
  }
  get documentElement(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.documentElement),
      O.map((element) => new DomElement(element))
    );
  }
  getElementsByTagName(qualifiedName: string): DomElement[] {
    return pipe(
      Array.from(this.native.getElementsByTagName(qualifiedName)),
      A.map((element) => new DomElement(element))
    );
  }
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): DomElement[] {
    return pipe(
      Array.from(this.native.getElementsByTagNameNS(namespace, localName)),
      A.map((element) => new DomElement(element))
    );
  }
  getElementsByClassName(classNames: string): DomElement[] {
    return pipe(
      Array.from(this.native.getElementsByClassName(classNames)),
      A.map((element) => new DomElement(element))
    );
  }

  createElement(
    localName: string,
    options?: string | DDomElementCreationOptions
  ): E.Either<
    InvalidCharacterErrorDomException | NotSupportedErrorDomException,
    DomElement
  > {
    return pipe(
      E.tryCatch(
        () =>
          pipe([localName, options] as const, (params) =>
            /* eslint-disable-next-line
                @typescript-eslint/consistent-type-assertions
            -- Typescript typings don't allow options as a string. */
            (this.native.createElement as CorrectedCreateElement)(...params)
          ),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidCharacterErrorDomException
            | NotSupportedErrorDomException
      ),
      E.map((element) => new DomElement(element))
    );
  }
  createElementNS(
    namespace: string | null,
    qualifiedName: string,
    options?: string | DDomElementCreationOptions
  ): E.Either<
    | InvalidCharacterErrorDomException
    | NamespaceErrorDomException
    | NotSupportedErrorDomException,
    DomElement
  > {
    return pipe(
      E.tryCatch(
        () =>
          pipe([namespace, qualifiedName, options] as const, (params) =>
            this.native.createElementNS(...params)
          ),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidCharacterErrorDomException
            | NamespaceErrorDomException
            | NotSupportedErrorDomException
      ),
      E.map((element) => new DomElement(element))
    );
  }
  createDocumentFragment(): DomDocumentFragment {
    return pipe(
      this.native.createDocumentFragment(),
      (fragment) => new DomDocumentFragment(fragment)
    );
  }
  createTextNode(data: string): DomText {
    return pipe(this.native.createTextNode(data), (text) => new DomText(text));
  }
  createCDATASection(
    data: string
  ): E.Either<
    NotSupportedErrorDomException | InvalidCharacterErrorDomException,
    DomCDATASection
  > {
    return pipe(
      E.tryCatch(
        () => this.native.createCDATASection(data),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | NotSupportedErrorDomException
            | InvalidCharacterErrorDomException
      ),
      E.map((cdata) => new DomCDATASection(cdata))
    );
  }
  createComment(data: string): DomComment {
    return pipe(
      this.native.createComment(data),
      (comment) => new DomComment(comment)
    );
  }
  createProcessingInstruction(
    target: string,
    data: string
  ): E.Either<InvalidCharacterErrorDomException, DomProcessingInstruction> {
    return pipe(
      E.tryCatch(
        () =>
          pipe([target, data] as const, (params) =>
            this.native.createProcessingInstruction(...params)
          ),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidCharacterErrorDomException
      ),
      E.map((instruction) => new DomProcessingInstruction(instruction))
    );
  }

  importNode(
    node: Node | IDomNode<Node>,
    deep?: boolean
  ): E.Either<NotSupportedErrorDomException, DomNode> {
    return pipe(
      E.tryCatch(
        () =>
          pipe(
            [node, deep] as const,
            ([node, deep]) => [getNative(node), deep] as const,
            (params) => this.native.importNode(...params)
          ),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      E.map((node) => new DomNode(node))
    );
  }
  adoptNode(
    node: Node | IDomNode<Node>
  ): E.Either<
    NotSupportedErrorDomException | HierarchyRequestErrorDomException,
    DomNode
  > {
    return pipe(
      E.tryCatch(
        () => pipe(getNative(node), this.native.adoptNode),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | NotSupportedErrorDomException
            | HierarchyRequestErrorDomException
      ),
      E.map((node) => new DomNode(node))
    );
  }

  createAttribute(
    localName: string
  ): E.Either<InvalidCharacterErrorDomException, DomAttr> {
    return pipe(
      E.tryCatch(
        () => this.native.createAttribute(localName),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidCharacterErrorDomException
      ),
      E.map((attr) => new DomAttr(attr))
    );
  }
  createAttributeNS(
    namespace: string | null,
    qualifiedName: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    DomAttr
  > {
    return pipe(
      E.tryCatch(
        () =>
          pipe([namespace, qualifiedName] as const, (params) =>
            this.native.createAttributeNS(...params)
          ),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidCharacterErrorDomException
      ),
      E.map((attr) => new DomAttr(attr))
    );
  }

  createRange(): DomRange {
    return pipe(this.native.createRange(), (range) => new DomRange(range));
  }

  createNodeIterator(
    root: Node | IDomNode<Node>,
    whatToShow?: CDomNodeFilterWhatToShow,
    filter?: CBDomNodeFilter | null
  ): DomNodeIterator {
    return pipe(
      [root, whatToShow, filter] as const,
      ([root, whatToShow, filter]) =>
        [
          getNative(root),
          whatToShow,
          filter == null
            ? null
            : typeof filter === "function"
            ? (node: Node): number => filter.call(this, new DomNode(node))
            : (node: Node): number =>
                filter.acceptNode.call(this, new DomNode(node)),
        ] as const,
      (params) => this.native.createNodeIterator(...params),
      (iterator) => new DomNodeIterator(iterator)
    );
  }
  createTreeWalker(
    root: Node | IDomNode<Node>,
    whatToShow?: CDomNodeFilterWhatToShow,
    filter?: CBDomNodeFilter | null
  ): DomTreeWalker {
    return pipe(
      [root, whatToShow, filter] as const,
      ([root, whatToShow, filter]) =>
        [
          getNative(root),
          whatToShow,
          filter == null
            ? null
            : typeof filter === "function"
            ? (node: Node): number => filter.call(this, new DomNode(node))
            : (node: Node): number =>
                filter.acceptNode.call(this, new DomNode(node)),
        ] as const,
      (params) => this.native.createTreeWalker(...params),
      (walker) => new DomTreeWalker(walker)
    );
  }

  getElementById(elementId: string): O.Option<DomElement> {
    return pipe(
      this.native.getElementById(elementId),
      O.fromNullable,
      O.map((element) => new DomElement(element))
    );
  }

  get activeElement(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.activeElement),
      O.map((element) => new DomElement(element))
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
    return E.tryCatch(
      () =>
        pipe(
          nodes,
          A.map((node) => (typeof node === "string" ? node : getNative(node))),
          (nodes) => this.native.prepend(...nodes)
        ),
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as HierarchyRequestErrorDomException
    );
  }
  append(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return E.tryCatch(
      () =>
        pipe(
          nodes,
          A.map((node) => (typeof node === "string" ? node : getNative(node))),
          (nodes) => this.native.append(...nodes)
        ),
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as HierarchyRequestErrorDomException
    );
  }
  replaceChildren(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return E.tryCatch(
      () =>
        pipe(
          nodes,
          A.map((node) => (typeof node === "string" ? node : getNative(node))),
          (nodes) => this.native.replaceChildren(...nodes)
        ),
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as HierarchyRequestErrorDomException
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
}
