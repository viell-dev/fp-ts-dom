import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotFoundErrorDomException,
  NotSupportedErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.js";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { DDomShadowRootInit } from "../dictionaries/DDomShadowRootInit.js";
import type { MDomChildNode } from "../mixins/MDomChildNode.js";
import type { MDomNonDocumentTypeChildNode } from "../mixins/MDomNonDocumentTypeChildNode.js";
import type { MDomParentNode } from "../mixins/MDomParentNode.js";
import type { MDomSlottable } from "../mixins/MDomSlottable.js";
import type { IDomAttr } from "./IDomAttr.js";
import type { IDomDOMTokenList } from "./IDomDOMTokenList.js";
import type { IDomNamedNodeMap } from "./IDomNamedNodeMap.js";
import type { IDomNode } from "./IDomNode.js";
import type { IDomShadowRoot } from "./IDomShadowRoot.js";

export interface IDomElement<N extends Element>
  extends IDomNode<N>,
    MDomParentNode,
    MDomNonDocumentTypeChildNode,
    MDomChildNode,
    MDomSlottable {
  readonly namespaceURI: O.Option<string>;
  readonly prefix: O.Option<string>;
  readonly localName: string;
  readonly tagName: string;

  id: string;
  className: string;
  readonly classList: IDomDOMTokenList<DOMTokenList>;
  slot: string;

  hasAttributes(): boolean;
  readonly attributes: IDomNamedNodeMap<NamedNodeMap>;
  getAttributeNames(): string[];
  getAttribute(qualifiedName: string): O.Option<string>;
  getAttributeNS(namespace: string | null, localName: string): O.Option<string>;
  setAttribute(
    qualifiedName: string,
    value: string
  ): E.Either<InvalidCharacterErrorDomException, void>;
  setAttributeNS(
    namespace: string | null,
    localName: string,
    value: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    void
  >;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  toggleAttribute(
    qualifiedName: string,
    force?: boolean
  ): E.Either<InvalidCharacterErrorDomException, boolean>;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;

  getAttributeNode(qualifiedName: string): O.Option<IDomAttr<Attr>>;
  getAttributeNodeNS(
    namespace: string | null,
    localName: string
  ): O.Option<IDomAttr<Attr>>;
  setAttributeNode(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  setAttributeNodeNS(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  removeAttributeNode(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<NotFoundErrorDomException, IDomAttr<Attr>>;

  attachShadow(
    init: DDomShadowRootInit
  ): E.Either<NotSupportedErrorDomException, IDomShadowRoot<ShadowRoot>>;
  readonly shadowRoot: O.Option<IDomShadowRoot<ShadowRoot>>;

  closest(
    selectors: string
  ): E.Either<SyntaxErrorDomException, O.Option<IDomElement<Element>>>;
  matches(selectors: string): E.Either<SyntaxErrorDomException, boolean>;

  getElementsByTagName(qualifiedName: string): IDomElement<Element>[];
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): IDomElement<Element>[];
  getElementsByClassName(classNames: string): IDomElement<Element>[];
}
