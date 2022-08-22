import * as O from "fp-ts/Option";
import { DomGetRootNodeOptions } from "../dictionaries/DomGetRootNodeOptions.js";
import { DomNodeDocumentPosition } from "../enums/DomNodeDocumentPosition.js";
import { DomNodeType } from "../enums/DomNodeType.js";
import { Optional } from "../helpers/Optional.js";
import { IDomConstructor } from "./IDom.js";
import { IDomDocument } from "./IDomDocument.js";
import { IDomEventTarget } from "./IDomEventTarget.js";
import { IDomNodeList } from "./IDomNodeList.js";

export interface IDomNodeConstructor extends IDomConstructor<Node> {
  new (): IDomNode<Node>;
}

export interface IDomNodeConstants {
  readonly ELEMENT_NODE: typeof DomNodeType.ELEMENT_NODE;
  readonly ATTRIBUTE_NODE: typeof DomNodeType.ATTRIBUTE_NODE;
  readonly TEXT_NODE: typeof DomNodeType.TEXT_NODE;
  readonly CDATA_SECTION_NODE: typeof DomNodeType.CDATA_SECTION_NODE;
  readonly PROCESSING_INSTRUCTION_NODE: typeof DomNodeType.PROCESSING_INSTRUCTION_NODE;
  readonly COMMENT_NODE: typeof DomNodeType.COMMENT_NODE;
  readonly DOCUMENT_NODE: typeof DomNodeType.DOCUMENT_NODE;
  readonly DOCUMENT_TYPE_NODE: typeof DomNodeType.DOCUMENT_TYPE_NODE;
  readonly DOCUMENT_FRAGMENT_NODE: typeof DomNodeType.DOCUMENT_FRAGMENT_NODE;

  readonly DOCUMENT_POSITION_DISCONNECTED: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  readonly DOCUMENT_POSITION_PRECEDING: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_PRECEDING;
  readonly DOCUMENT_POSITION_FOLLOWING: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  readonly DOCUMENT_POSITION_CONTAINS: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINS;
  readonly DOCUMENT_POSITION_CONTAINED_BY: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
}

export interface IDomNode<N extends Node> extends IDomEventTarget<N> {
  readonly nodeType: DomNodeType;
  readonly nodeName: string;

  readonly baseURI: string;

  readonly isConnected: boolean;
  readonly ownerDocument: O.Option<IDomDocument<Document>>;
  getRootNode(options?: Optional<DomGetRootNodeOptions>): IDomNode<Node>;
  parentNode: O.Option<IDomNode<Node>>;
  hasChildNodes(): boolean;
  childNodes: IDomNodeList<NodeList>;
  firstChild: O.Option<IDomNode<Node>>;
  lastChild: O.Option<IDomNode<Node>>;
  previousSibling: O.Option<IDomNode<Node>>;
  nextSibling: O.Option<IDomNode<Node>>;

  nodeValue: N extends Attr | CharacterData ? string : null;
  textContent: N extends Attr | CharacterData | DocumentFragment | Element
    ? string
    : null;
  normalize(): void;

  cloneNode(deep?: Optional<boolean>): IDomNode<Node>;
  isEqualNode(otherNode: Node | IDomNode<Node> | null): boolean;

  compareDocumentPosition(
    other: Node | IDomNode<Node>
  ): DomNodeDocumentPosition;
  contains(other: Node | IDomNode<Node> | null): boolean;

  lookupPrefix(namespace: string | null): O.Option<string>;
  lookupNamespaceURI(prefix: string | null): O.Option<string>;
  isDefaultNamespace(namespace: string | null): boolean;

  insertBefore(
    node: Node | IDomNode<Node>,
    child: Node | IDomNode<Node> | null
  ): IDomNode<Node>;
  appendChild(node: Node | IDomNode<Node>): IDomNode<Node>;
  replaceChild(
    node: Node | IDomNode<Node>,
    child: Node | IDomNode<Node>
  ): IDomNode<Node>;
  removeChild(child: Node | IDomNode<Node>): IDomNode<Node>;
}
