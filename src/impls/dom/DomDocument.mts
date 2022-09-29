import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotSupportedErrorDomException,
  SecurityErrorDomException,
} from "@/exceptions/DomException.mjs";
import { getNative } from "@/helpers/getNative.mjs";
import type { ICssomCSSStyleSheet } from "@/specs/cssom/interfaces/ICssomCSSStyleSheet.mjs";
import type { CBDomNodeFilter } from "@/specs/dom/callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "@/specs/dom/constants/CDomNodeFilterWhatToShow.mjs";
import type { DDomElementCreationOptions } from "@/specs/dom/dictionaries/DDomElementCreationOptions.mjs";
import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type { EHtmlDocumentReadyState } from "@/specs/html/enums/EHtmlDocumentReadyState.mjs";
import type { EHtmlDocumentVisibilityState } from "@/specs/html/enums/EHtmlDocumentVisibilityState.mjs";
import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import type {
  MissingEventHandler,
  THtmlEventHandler,
} from "@/specs/html/types/THtmlEventHandler.mjs";
import type { THtmlHTMLOrSVGScriptElement } from "@/specs/html/types/THtmlHTMLOrSVGScriptElement.mjs";
import type { THtmlOnErrorEventHandler } from "@/specs/html/types/THtmlOnErrorEventHandler.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { CssomCSSStyleSheet } from "../cssom/CssomCSSStyleSheet.mjs";
import { CssomStyleSheetList } from "../cssom/CssomStyleSheetList.mjs";
import { HtmlHTMLElement } from "../html/HtmlHTMLElement.mjs";
import { HtmlHTMLHeadElement } from "../html/HtmlHTMLHeadElement.mjs";
import { HtmlHTMLScriptElement } from "../html/HtmlHTMLScriptElement.mjs";
import { HtmlLocation } from "../html/HtmlLocation.mjs";
import { HtmlWindowProxy } from "../html/HtmlWindowProxy.mjs";
import { Svg2SVGScriptElement } from "../svg2/Svg2SVGScriptElement.mjs";
import { DomAttr } from "./DomAttr.mjs";
import { DomCDATASection } from "./DomCDATASection.mjs";
import { DomComment } from "./DomComment.mjs";
import { DomDocumentFragment } from "./DomDocumentFragment.mjs";
import { DomDocumentType } from "./DomDocumentType.mjs";
import { DomDOMImplementation } from "./DomDOMImplementation.mjs";
import { DomElement } from "./DomElement.mjs";
import { DomEvent } from "./DomEvent.mjs";
import { DomNode } from "./DomNode.mjs";
import { DomNodeBase } from "./DomNodeBase.mjs";
import { DomNodeIterator } from "./DomNodeIterator.mjs";
import { DomProcessingInstruction } from "./DomProcessingInstruction.mjs";
import { DomRange } from "./DomRange.mjs";
import { DomText } from "./DomText.mjs";
import { DomTreeWalker } from "./DomTreeWalker.mjs";

interface MissingEventHandlers {
  onbeforeinput: MissingEventHandler;
  onbeforematch: MissingEventHandler;
  oncancel: MissingEventHandler;
  oncontextlost: MissingEventHandler;
  oncontextrestored: MissingEventHandler;
}

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
  get adoptedStyleSheets(): CssomCSSStyleSheet[] {
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
    return pipe(
      O.fromNullable(this.native.currentScript),
      O.map((script) =>
        script instanceof HTMLScriptElement
          ? new HtmlHTMLScriptElement(script)
          : new Svg2SVGScriptElement(script)
      )
    );
  }

  open(unused1?: string, unused2?: string): DomDocument;
  open(url: string, name: string, features: string): O.Option<HtmlWindowProxy>;
  open(
    url?: string,
    name?: string,
    features?: string
  ): DomDocument | O.Option<HtmlWindowProxy> {
    return pipe(
      tuple(url, name, features),
      ([url, name, features]): Document | WindowProxy | null => {
        if (
          typeof url === "string" &&
          typeof name === "string" &&
          typeof features === "string"
        ) {
          return this.native.open(url, name, features);
        }

        return this.native.open();
      },
      (documentOrWindow) =>
        documentOrWindow instanceof Document
          ? E.left(documentOrWindow)
          : E.right(documentOrWindow),
      E.map(O.fromNullable),
      E.match<
        Document,
        O.Option<WindowProxy>,
        DomDocument | O.Option<HtmlWindowProxy>
      >(
        (document) => new DomDocument(document),
        O.map((window) => new HtmlWindowProxy(window))
      )
    );
  }
  close(): void {
    this.native.close();
  }
  write(...text: string[]): void {
    this.native.write(...text);
  }
  writeln(...text: string[]): void {
    this.native.writeln(...text);
  }

  get defaultView(): O.Option<HtmlWindowProxy> {
    return pipe(
      this.native.defaultView,
      O.fromNullable,
      O.map((window) => new HtmlWindowProxy(window))
    );
  }
  hasFocus(): boolean {
    return this.native.hasFocus();
  }
  get designMode(): "on" | "off" {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, this can only be the strings "on" or "off". */
    return this.native.designMode as "on" | "off";
  }
  set designMode(designMode: "on" | "off") {
    this.native.designMode = designMode;
  }
  get hidden(): boolean {
    return this.native.hidden;
  }
  get visibilityState(): EHtmlDocumentVisibilityState {
    return this.native.visibilityState;
  }

  get onreadystatechange(): THtmlEventHandler {
    return pipe(
      this.native.onreadystatechange,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onreadystatechange(onreadystatechange: THtmlEventHandler) {
    this.native.onreadystatechange = pipe(
      onreadystatechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onvisibilitychange(): THtmlEventHandler {
    return pipe(
      this.native.onvisibilitychange,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onvisibilitychange(onvisibilitychange: THtmlEventHandler) {
    this.native.onvisibilitychange = pipe(
      onvisibilitychange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }

  get onabort(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onabort as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onabort(onabort) {
    this.native.onabort = pipe(
      onabort,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onauxclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onauxclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onauxclick(onauxclick) {
    this.native.onauxclick = pipe(
      onauxclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeinput(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- onbeforeinput is missing in the TypeScript types. */
      (this.native as Document & MissingEventHandlers).onbeforeinput,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforeinput(onbeforeinput) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- onbeforeinput is missing in the TypeScript types. */
    (this.native as Document & MissingEventHandlers).onbeforeinput = pipe(
      onbeforeinput,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforematch(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- onbeforematch is missing in the TypeScript types. */
      (this.native as Document & MissingEventHandlers).onbeforematch,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforematch(onbeforematch) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- onbeforematch is missing in the TypeScript types. */
    (this.native as Document & MissingEventHandlers).onbeforematch = pipe(
      onbeforematch,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onblur(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onblur as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onblur(onblur) {
    this.native.onblur = pipe(
      onblur,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncancel(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncancel is missing in the TypeScript types. */
      (this.native as Document & MissingEventHandlers).oncancel,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncancel(oncancel) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncancel is missing in the TypeScript types. */
    (this.native as Document & MissingEventHandlers).oncancel = pipe(
      oncancel,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncanplay(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncanplay as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncanplay(oncanplay) {
    this.native.oncanplay = pipe(
      oncanplay,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncanplaythrough(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncanplaythrough as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncanplaythrough(oncanplaythrough) {
    this.native.oncanplaythrough = pipe(
      oncanplaythrough,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onchange(onchange) {
    this.native.onchange = pipe(
      onchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onclick(onclick) {
    this.native.onclick = pipe(
      onclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onclose(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onclose as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onclose(onclose) {
    this.native.onclose = pipe(
      onclose,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextlost(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncontextlost is missing in the TypeScript types. */
      (this.native as Document & MissingEventHandlers).oncontextlost,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextlost(oncontextlost) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncontextlost is missing in the TypeScript types. */
    (this.native as Document & MissingEventHandlers).oncontextlost = pipe(
      oncontextlost,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextmenu(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncontextmenu as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextmenu(oncontextmenu) {
    this.native.oncontextmenu = pipe(
      oncontextmenu,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextrestored(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncontextrestored is missing in the TypeScript types. */
      (this.native as Document & MissingEventHandlers).oncontextrestored,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextrestored(oncontextrestored) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncontextrestored is missing in the TypeScript types. */
    (this.native as Document & MissingEventHandlers).oncontextrestored = pipe(
      oncontextrestored,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncuechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncuechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncuechange(oncuechange) {
    this.native.oncuechange = pipe(
      oncuechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondblclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondblclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondblclick(ondblclick) {
    this.native.ondblclick = pipe(
      ondblclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondrag(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondrag as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondrag(ondrag) {
    this.native.ondrag = pipe(
      ondrag,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragend(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragend as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragend(ondragend) {
    this.native.ondragend = pipe(
      ondragend,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragenter(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragenter as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragenter(ondragenter) {
    this.native.ondragenter = pipe(
      ondragenter,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragleave(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragleave as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragleave(ondragleave) {
    this.native.ondragleave = pipe(
      ondragleave,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragover(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragover as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragover(ondragover) {
    this.native.ondragover = pipe(
      ondragover,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragstart(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragstart as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragstart(ondragstart) {
    this.native.ondragstart = pipe(
      ondragstart,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondrop(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondrop as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondrop(ondrop) {
    this.native.ondrop = pipe(
      ondrop,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondurationchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondurationchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondurationchange(ondurationchange) {
    this.native.ondurationchange = pipe(
      ondurationchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onemptied(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onemptied as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onemptied(onemptied) {
    this.native.onemptied = pipe(
      onemptied,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onended(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onended as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onended(onended) {
    this.native.onended = pipe(
      onended,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onerror(): THtmlOnErrorEventHandler {
    return pipe(
      this.native.onerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (
            event: IDomEvent<Event> | string,
            source?: string,
            lineno?: number,
            colno?: number,
            error?: Error
          ) =>
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any
            -- Allow any here */
            callback.bind<Document, any, unknown>(
              this.getNative(),
              typeof event === "string" ? event : event.getNative(),
              source,
              lineno,
              colno,
              error
            )()
      ),
      O.toNullable
    );
  }
  set onerror(onerror) {
    this.native.onerror = pipe(
      onerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (
            event: string | Event,
            source?: string,
            lineno?: number,
            colno?: number,
            error?: Error
          ): unknown =>
            callback.call(
              this,
              typeof event === "string" ? event : new DomEvent(event),
              source,
              lineno,
              colno,
              error
            )
      ),
      O.toNullable
    );
  }
  get onfocus(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onfocus as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onfocus(onfocus) {
    this.native.onfocus = pipe(
      onfocus,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onformdata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onformdata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onformdata(onformdata) {
    this.native.onformdata = pipe(
      onformdata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oninput(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oninput as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oninput(oninput) {
    this.native.oninput = pipe(
      oninput,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oninvalid(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oninvalid as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oninvalid(oninvalid) {
    this.native.oninvalid = pipe(
      oninvalid,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onkeydown(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onkeydown as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onkeydown(onkeydown) {
    this.native.onkeydown = pipe(
      onkeydown,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onkeyup(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onkeyup as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onkeyup(onkeyup) {
    this.native.onkeyup = pipe(
      onkeyup,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onload(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onload as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onload(onload) {
    this.native.onload = pipe(
      onload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadeddata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadeddata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadeddata(onloadeddata) {
    this.native.onloadeddata = pipe(
      onloadeddata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadedmetadata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadedmetadata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadedmetadata(onloadedmetadata) {
    this.native.onloadedmetadata = pipe(
      onloadedmetadata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadstart(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadstart as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadstart(onloadstart) {
    this.native.onloadstart = pipe(
      onloadstart,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmousedown(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmousedown as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmousedown(onmousedown) {
    this.native.onmousedown = pipe(
      onmousedown,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseenter(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseenter as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseenter(onmouseenter) {
    this.native.onmouseenter = pipe(
      onmouseenter,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseleave(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseleave as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseleave(onmouseleave) {
    this.native.onmouseleave = pipe(
      onmouseleave,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmousemove(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmousemove as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmousemove(onmousemove) {
    this.native.onmousemove = pipe(
      onmousemove,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseout(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseout as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseout(onmouseout) {
    this.native.onmouseout = pipe(
      onmouseout,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseover(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseover as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseover(onmouseover) {
    this.native.onmouseover = pipe(
      onmouseover,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseup(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseup as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseup(onmouseup) {
    this.native.onmouseup = pipe(
      onmouseup,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpause(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpause as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpause(onpause) {
    this.native.onpause = pipe(
      onpause,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onplay(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onplay as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onplay(onplay) {
    this.native.onplay = pipe(
      onplay,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onplaying(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onplaying as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onplaying(onplaying) {
    this.native.onplaying = pipe(
      onplaying,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onprogress(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onprogress as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onprogress(onprogress) {
    this.native.onprogress = pipe(
      onprogress,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onratechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onratechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onratechange(onratechange) {
    this.native.onratechange = pipe(
      onratechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onreset(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onreset as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onreset(onreset) {
    this.native.onreset = pipe(
      onreset,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onresize(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onresize as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onresize(onresize) {
    this.native.onresize = pipe(
      onresize,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onscroll(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onscroll as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onscroll(onscroll) {
    this.native.onscroll = pipe(
      onscroll,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsecuritypolicyviolation(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsecuritypolicyviolation as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsecuritypolicyviolation(onsecuritypolicyviolation) {
    this.native.onsecuritypolicyviolation = pipe(
      onsecuritypolicyviolation,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onseeked(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onseeked as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onseeked(onseeked) {
    this.native.onseeked = pipe(
      onseeked,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onseeking(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onseeking as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onseeking(onseeking) {
    this.native.onseeking = pipe(
      onseeking,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onselect(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onselect as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onselect(onselect) {
    this.native.onselect = pipe(
      onselect,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onslotchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onslotchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onslotchange(onslotchange) {
    this.native.onslotchange = pipe(
      onslotchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onstalled(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onstalled as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onstalled(onstalled) {
    this.native.onstalled = pipe(
      onstalled,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsubmit(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsubmit as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsubmit(onsubmit) {
    this.native.onsubmit = pipe(
      onsubmit,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsuspend(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsuspend as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsuspend(onsuspend) {
    this.native.onsuspend = pipe(
      onsuspend,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ontimeupdate(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ontimeupdate as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ontimeupdate(ontimeupdate) {
    this.native.ontimeupdate = pipe(
      ontimeupdate,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ontoggle(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ontoggle as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ontoggle(ontoggle) {
    this.native.ontoggle = pipe(
      ontoggle,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onvolumechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onvolumechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onvolumechange(onvolumechange) {
    this.native.onvolumechange = pipe(
      onvolumechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onwaiting(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onwaiting as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onwaiting(onwaiting) {
    this.native.onwaiting = pipe(
      onwaiting,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onwheel(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onwheel as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onwheel(onwheel) {
    this.native.onwheel = pipe(
      onwheel,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }

  get oncopy(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncopy as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncopy(oncopy: THtmlEventHandler) {
    this.native.oncopy = pipe(
      oncopy,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncut(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncut as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncut(oncut: THtmlEventHandler) {
    this.native.oncut = pipe(
      oncut,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpaste(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpaste as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpaste(onpaste: THtmlEventHandler) {
    this.native.onpaste = pipe(
      onpaste,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
}
