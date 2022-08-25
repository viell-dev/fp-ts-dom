import type * as O from "fp-ts/Option";
import type { MDomDocumentOrShadowRoot } from "../mixins/MDomDocumentOrShadowRoot.js";
import type { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.js";
import type { MDomParentNode } from "../mixins/MDomParentNode.js";
import type { IDomAttr } from "./IDomAttr.js";
import type { IDomCDATASection } from "./IDomCDATASection.js";
import type { IDomComment } from "./IDomComment.js";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import type { IDomDocumentType } from "./IDomDocumentType.js";
import type { IDomDOMImplementation } from "./IDomDOMImplementation.js";
import type { IDomElement } from "./IDomElement.js";
import type { IDomHTMLCollection } from "./IDomHTMLCollection.js";
import type { IDomNode } from "./IDomNode.js";
import type { IDomNodeIterator } from "./IDomNodeIterator.js";
import type { IDomProccessingInstruction } from "./IDomProccessingInstruction.js";
import type { IDomRange } from "./IDomRange.js";
import type { IDomText } from "./IDomText.js";
import type { IDomTreeWalker } from "./IDomTreeWalker.js";

export interface IDomDocument<N extends Document>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomDocumentOrShadowRoot,
    MDomParentNode {
  readonly implementation: IDomDOMImplementation<DOMImplementation>;
  readonly URL: string;
  readonly documentURI: string;
  readonly compatMode: string;
  readonly characterSet: string;
  readonly contentType: string;

  readonly doctype: O.Option<IDomDocumentType<DocumentType>>;
  readonly documentElement: O.Option<IDomElement<Element>>;
  getElementsByTagName(
    qualifiedName: string
  ): IDomHTMLCollection<HTMLCollection>;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): IDomHTMLCollection<HTMLCollection>;
  getElementsByClassName(
    qualifiedName: string
  ): IDomHTMLCollection<HTMLCollection>;

  createElement(
    qualifiedName: string,
    options?: string | ElementCreationOptions
  ): IDomElement<Element>;
  createElementNS(
    namepsace: string | null,
    localName: string,
    options?: string | ElementCreationOptions
  ): IDomElement<Element>;
  createDocumentFragment(): IDomDocumentFragment<DocumentFragment>;
  createTextNode(data: string): IDomText<Text>;
  createCDATASection(data: string): IDomCDATASection<CDATASection>;
  createComment(data: string): IDomComment<Comment>;
  createProcessingInstruction(
    target: string,
    data: string
  ): IDomProccessingInstruction<ProcessingInstruction>;

  importNode(node: Node | IDomNode<Node>, deep?: boolean): IDomNode<Node>;
  adoptNode(node: Node | IDomNode<Node>): IDomNode<Node>;

  createAttribute(qualifiedName: string): IDomAttr<Attr>;
  createAttributeNS(
    namepsace: string | null,
    localName: string
  ): IDomAttr<Attr>;

  createRange(): IDomRange<Range>;

  createNodeIterator(
    root: Node | IDomNode<Node>,
    whatToShow?: number,
    filter?: NodeFilter | null
  ): IDomNodeIterator<NodeIterator>;
  createTreeWalker(
    root: Node | IDomNode<Node>,
    whatToShow?: number,
    filter?: NodeFilter | null
  ): IDomTreeWalker<TreeWalker>;
}
