import type * as O from "fp-ts/Option";
import type { CDomNodeType } from "../constants/CDomNodeType.js";
import type { DomNodeDocumentPosition } from "../constants/DomNodeDocumentPosition.js";
import type { DDomGetRootNodeOptions } from "../dictionaries/DDomGetRootNodeOptions.js";
import type { IDomDocument } from "./IDomDocument.js";
import type { IDomElement } from "./IDomElement.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";
import type { IDomNodeList } from "./IDomNodeList.js";

export interface IDomNodeConstants {
  // Node Types:
  readonly ELEMENT_NODE: typeof CDomNodeType.ELEMENT_NODE;
  readonly ATTRIBUTE_NODE: typeof CDomNodeType.ATTRIBUTE_NODE;
  readonly TEXT_NODE: typeof CDomNodeType.TEXT_NODE;
  readonly CDATA_SECTION_NODE: typeof CDomNodeType.CDATA_SECTION_NODE;
  /** @deprecated Not used anymore. */
  readonly ENTITY_REFERENCE_NODE: typeof CDomNodeType.ENTITY_REFERENCE_NODE;
  /** @deprecated Not used anymore. */
  readonly ENTITY_NODE: typeof CDomNodeType.ENTITY_NODE;
  readonly PROCESSING_INSTRUCTION_NODE: typeof CDomNodeType.PROCESSING_INSTRUCTION_NODE;
  readonly COMMENT_NODE: typeof CDomNodeType.COMMENT_NODE;
  readonly DOCUMENT_NODE: typeof CDomNodeType.DOCUMENT_NODE;
  readonly DOCUMENT_TYPE_NODE: typeof CDomNodeType.DOCUMENT_TYPE_NODE;
  readonly DOCUMENT_FRAGMENT_NODE: typeof CDomNodeType.DOCUMENT_FRAGMENT_NODE;
  /** @deprecated Not used anymore. */
  readonly NOTATION_NODE: typeof CDomNodeType.NOTATION_NODE;

  // Document Positions:
  readonly DOCUMENT_POSITION_DISCONNECTED: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  readonly DOCUMENT_POSITION_PRECEDING: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_PRECEDING;
  readonly DOCUMENT_POSITION_FOLLOWING: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  readonly DOCUMENT_POSITION_CONTAINS: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINS;
  readonly DOCUMENT_POSITION_CONTAINED_BY: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: typeof DomNodeDocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
}

export interface IDomNode<N extends Node> extends IDomEventTarget<N> {
  // Node type class constants are declared in the interface above.
  readonly nodeType: CDomNodeType;
  readonly nodeName: string;

  readonly baseURI: string;

  readonly isConnected: boolean;
  readonly ownerDocument: O.Option<IDomDocument<Document>>;
  getRootNode(options?: DDomGetRootNodeOptions): IDomNode<Node>;
  parentNode: O.Option<IDomNode<Node>>;
  parentElement: O.Option<IDomElement<Element>>;
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

  cloneNode(deep?: boolean): IDomNode<Node>;
  isEqualNode(otherNode: Node | IDomNode<Node> | null): boolean;
  /** @deprecated Use `nativeNodeA === nativeNodeB` instead. */
  isSameNode(otherNode: Node | IDomNode<Node> | null): boolean;

  // Document position class constants are declared in the interface above.
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
