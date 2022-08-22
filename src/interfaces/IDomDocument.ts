import * as O from "fp-ts/Option";
import { IDomAttr } from "./IDomAttr.js";
import { IDomCDATASection } from "./IDomCDATASection.js";
import { IDomComment } from "./IDomComment.js";
import { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import { IDomDocumentType } from "./IDomDocumentType.js";
import { IDomDOMImplementation } from "./IDomDOMImplementation.js";
import { IDomElement } from "./IDomElement.js";
import { IDomHTMLCollection } from "./IDomHTMLCollection.js";
import { IDomNode } from "./IDomNode.js";
import { IDomNodeIterator } from "./IDomNodeIterator.js";
import { IDomProccessingInstruction } from "./IDomProccessingInstruction.js";
import { IDomRange } from "./IDomRange.js";
import { IDomText } from "./IDomText.js";
import { IDomTreeWalker } from "./IDomTreeWalker.js";

export interface IDomDocument<N extends Document> extends IDomNode<N> {
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
