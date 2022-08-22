import * as O from "fp-ts/Option";
import { DomShadowRootInit } from "../dictionaries/DomShadowRootInit.js";
import { MDomChildNode } from "../mixins/MDomChildNode.js";
import { IDomAttr } from "./IDomAttr.js";
import { IDomDOMTokenList } from "./IDomDOMTokenList.js";
import { IDomHTMLCollection } from "./IDomHTMLCollection.js";
import { IDomNamedNodeMap } from "./IDomNamedNodeMap.js";
import { IDomNode } from "./IDomNode.js";
import { IDomShadowRoot } from "./IDomShadowRoot.js";

export interface IDomElement<N extends Element>
  extends IDomNode<N>,
    MDomChildNode {
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
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(
    namespace: string | null,
    localName: string,
    value: string
  ): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;

  getAttributeNode(qualifiedName: string): O.Option<IDomAttr<Attr>>;
  getAttributeNodeNS(
    namespace: string | null,
    localName: string
  ): O.Option<IDomAttr<Attr>>;
  setAttributeNode(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  setAttributeNodNSe(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  removeAttributeNode(attr: Attr | IDomAttr<Attr>): IDomAttr<Attr>;

  attachShadow(init: DomShadowRootInit): IDomShadowRoot<ShadowRoot>;
  readonly shadowRoot: O.Option<IDomShadowRoot<ShadowRoot>>;

  closest(selectors: string): O.Option<IDomElement<Element>>;
  matches(selectors: string): boolean;

  getElementsByTagName(
    qualifiedName: string
  ): IDomHTMLCollection<HTMLCollection>;
  getElementsByTagNameNS(
    namepsace: string | null,
    localName: string
  ): IDomHTMLCollection<HTMLCollection>;
  getElementsByClassName(
    qualifiedName: string
  ): IDomHTMLCollection<HTMLCollection>;
}
