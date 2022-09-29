import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotFoundErrorDomException,
  /*NotSupportedErrorDomException,*/
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
//import type { DDomShadowRootInit } from "../dictionaries/DDomShadowRootInit.mjs";
import type { MDomChildNode } from "../mixins/MDomChildNode.mjs";
//import type { MDomNonDocumentTypeChildNode } from "../mixins/MDomNonDocumentTypeChildNode.mjs";
import type { MDomParentNode } from "../mixins/MDomParentNode.mjs";
import type { MDomSlottable } from "../mixins/MDomSlottable.mjs";
import type { IDomAttr } from "./IDomAttr.mjs";
import type { IDomDOMTokenList } from "./IDomDOMTokenList.mjs";
import type { IDomNamedNodeMap } from "./IDomNamedNodeMap.mjs";
import type { IDomNode } from "./IDomNode.mjs";
//import type { IDomShadowRoot } from "./IDomShadowRoot.mjs";

export interface IDomElement<N extends Element, CN = string>
  extends IDomNode<N>,
    MDomParentNode,
    /*MDomNonDocumentTypeChildNode,*/
    MDomChildNode,
    MDomSlottable {
  readonly namespaceURI: O.Option<string>;
  readonly prefix: O.Option<string>;
  readonly localName: string;
  readonly tagName: string;

  id: string;
  className: CN;
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
  ): O.Option<InvalidCharacterErrorDomException>;
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

  /*attachShadow(
    init: DDomShadowRootInit
  ): E.Either<NotSupportedErrorDomException, IDomShadowRoot<ShadowRoot>>;
  readonly shadowRoot: O.Option<IDomShadowRoot<ShadowRoot>>;*/

  /*closest(
    selectors: string
  ): E.Either<SyntaxErrorDomException, O.Option<IDomElement<Element>>>;*/
  matches(selectors: string): E.Either<SyntaxErrorDomException, boolean>;

  /*getElementsByTagName(qualifiedName: string): IDomElement<Element>[];
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): IDomElement<Element>[];
  getElementsByClassName(classNames: string): IDomElement<Element>[];*/
}
