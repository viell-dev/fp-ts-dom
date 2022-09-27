import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotSupportedErrorDomException,
  SecurityErrorDomException,
} from "@/exceptions/DomException.mjs";
import { getNative } from "@/helpers/getNative.mjs";
import type { NotKeyOf } from "@/helpers/NotKeyOf.mjs";
import type { ICssomCSSStyleSheet } from "@/specs/cssom/interfaces/ICssomCSSStyleSheet.mjs";
import type { CBDomNodeFilter } from "@/specs/dom/callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "@/specs/dom/constants/CDomNodeFilterWhatToShow.mjs";
import type { DDomElementCreationOptions } from "@/specs/dom/dictionaries/DDomElementCreationOptions.mjs";
import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type { EHtmlDocumentReadyState } from "@/specs/html/enums/EHtmlDocumentReadyState.mjs";
import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import type { THtmlHTMLOrSVGScriptElement } from "@/specs/html/types/THtmlHTMLOrSVGScriptElement.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { HtmlLocation } from "../html/HtmlLocation.mjs";
import { DomAttr } from "./DomAttr.mjs";
import { DomCDATASection } from "./DomCDATASection.mjs";
import { DomComment } from "./DomComment.mjs";
import { DomDocumentFragment } from "./DomDocumentFragment.mjs";
import { DomDocumentType } from "./DomDocumentType.mjs";
import { DomDOMImplementation } from "./DomDOMImplementation.mjs";
import { DomElement } from "./DomElement.mjs";
import { DomNode } from "./DomNode.mjs";
import { DomNodeBase } from "./DomNodeBase.mjs";
import { DomNodeIterator } from "./DomNodeIterator.mjs";
import { DomProcessingInstruction } from "./DomProcessingInstruction.mjs";
import { DomRange } from "./DomRange.mjs";
import { DomText } from "./DomText.mjs";
import { DomTreeWalker } from "./DomTreeWalker.mjs";

type CorrectedCreateElement = (
  localName: string,
  options?: string | ElementCreationOptions
) => Element;

// @StaticImplements<IDomDocumentConstructors>()
export class DomDocument
  extends DomNodeBase<Document>
  implements IDomDocument<Document>
{
  /*
  constructor();
  constructor(document: Document);
  constructor(document?: Document) {
    const nativeDocument =
      document instanceof Document ? document : new Document();

    super(nativeDocument);
  }
  */

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
  get styleSheets(): CssomStyleSheetList {
    return new CssomStyleSheetList(this.native.styleSheets);
  }
  get adoptedStyleSheets(): CssomCSSStyleSheet {
    return pipe(
      this.native.adoptedStyleSheets,
      A.map((styleSheet) => new CssomCSSStyleSheet(styleSheet))
    );
  }
  setAdoptedStyleSheets(
    styleSheets: (CSSStyleSheet | ICssomCSSStyleSheet<CSSStyleSheet>)[]
  ): void {
    this.native.adoptedStyleSheets = pipe(styleSheets, A.map(getNative));
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
  ): O.Option<HierarchyRequestErrorDomException> {
    return pipe(
      E.tryCatch(
        () =>
          pipe(
            nodes,
            A.map((node) =>
              typeof node === "string" ? node : getNative(node)
            ),
            (nodes) => this.native.prepend(...nodes)
          ),
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      O.getLeft
    );
  }
  append(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException> {
    return pipe(
      E.tryCatch(
        () =>
          pipe(
            nodes,
            A.map((node) =>
              typeof node === "string" ? node : getNative(node)
            ),
            (nodes) => this.native.append(...nodes)
          ),
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      O.getLeft
    );
  }
  replaceChildren(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException> {
    return pipe(
      E.tryCatch(
        () =>
          pipe(
            nodes,
            A.map((node) =>
              typeof node === "string" ? node : getNative(node)
            ),
            (nodes) => this.native.replaceChildren(...nodes)
          ),
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      O.getLeft
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

  get location(): O.Option<HtmlLocation> {
    return pipe(
      O.fromNullable(this.native.location),
      O.map((location) => new HtmlLocation(location))
    );
  }
  get domain(): string {
    return this.native.domain;
  }
  set domain(domain: string) {
    this.native.domain = domain;
  }
  get referrer(): string {
    return this.native.referrer;
  }
  get cookie(): E.Either<SecurityErrorDomException, string> {
    return E.tryCatch(
      () => this.native.cookie,
      /* eslint-disable-next-line
        @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as SecurityErrorDomException
    );
  }
  setCookie(cookie: string): O.Option<SecurityErrorDomException> {
    return pipe(
      cookie,
      E.tryCatchK(
        (cookie) => {
          this.native.cookie = cookie;
        },
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  get lastModified(): string {
    return this.native.lastModified;
  }
  get readyState(): EHtmlDocumentReadyState {
    return this.native.readyState;
  }

  [name: NotKeyOf<DomDocument>]: {};
  get title(): string {
    return this.native.title;
  }
  set title(title: string) {
    this.native.title = title;
  }
  get dir(): string {
    return this.native.dir;
  }
  set dir(dir: string) {
    this.native.dir = dir;
  }
  get body(): O.Option<HtmlHTMLElement> {
    return pipe(
      O.fromNullable(this.native.body),
      O.map((body) => new HtmlHTMLElement(body))
    );
  }
  setBody(
    body: HTMLElement | IHtmlHTMLElement<HTMLElement>
  ): O.Option<HierarchyRequestErrorDomException> {
    return pipe(
      getNative(body),
      E.tryCatchK(
        (body) => {
          this.native.body = body;
        },
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      O.getLeft
    );
  }
  get head(): O.Option<HtmlHTMLHeadElement> {
    return pipe(
      O.fromNullable(this.native.head),
      O.map((head) => new HtmlHTMLHeadElement(head))
    );
  }
  get images(): DomElement[] {
    return pipe(
      Array.from(this.native.images),
      A.map((element) => new DomElement(element))
    );
  }
  get embeds(): DomElement[] {
    return pipe(
      Array.from(this.native.embeds),
      A.map((element) => new DomElement(element))
    );
  }
  get plugins(): DomElement[] {
    return pipe(
      Array.from(this.native.plugins),
      A.map((element) => new DomElement(element))
    );
  }
  get links(): DomElement[] {
    return pipe(
      Array.from(this.native.links),
      A.map((element) => new DomElement(element))
    );
  }
  get forms(): DomElement[] {
    return pipe(
      Array.from(this.native.forms),
      A.map((element) => new DomElement(element))
    );
  }
  get scripts(): DomElement[] {
    return pipe(
      Array.from(this.native.scripts),
      A.map((element) => new DomElement(element))
    );
  }
  getElementsByName(elementName: string): DomNode[] {
    return pipe(
      tuple(elementName),
      tupled(this.native.getElementsByName),
      (nodeList) => Array.from(nodeList),
      A.map((node) => new DomNode(node))
    );
  }
  get currentScript(): O.Option<THtmlHTMLOrSVGScriptElement> {
    return pipe(O.fromNullable(this.native.currentScript));
  }

  open(unused1?: string, unused2?: string): IDomDocument<Document>;
  open(
    url: string,
    name: string,
    features: string
  ): O.Option<IHtmlWindowProxy<WindowProxy>>;
  close(): void;
  write(...text: string[]): void;
  writeln(...text: string[]): void;

  get defaultView(): O.Option<IHtmlWindowProxy<WindowProxy>> {
    return this.native.defaultView;
  }
  hasFocus(): boolean;
  designMode: string;
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
  queryCommandEnabled(commandId: string): boolean;
  queryCommandIndeterm(commandId: string): boolean;
  queryCommandState(commandId: string): boolean;
  queryCommandSupported(commandId: string): boolean;
  queryCommandValue(commandId: string): string;
  get hidden(): boolean {
    return this.native.hidden;
  }
  get visibilityState(): EHtmlDocumentVisibilityState {
    return this.native.visibilityState;
  }

  onreadystatechange: THtmlEventHandler;
  onvisibilitychange: THtmlEventHandler;
}
