import type { NotSupportedErrorDomException } from "@/exceptions/DomException.js";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CDomNodeDocumentPosition } from "../constants/CDomNodeDocumentPosition.js";
import type { CDomNodeType } from "../constants/CDomNodeType.js";
import type { DDomGetRootNodeOptions } from "../dictionaries/DDomGetRootNodeOptions.js";
import type { IDomDocument } from "./IDomDocument.js";
import type { IDomElement } from "./IDomElement.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomNodeConstants {
  // Node Types:
  readonly ELEMENT_NODE: typeof CDomNodeType.ELEMENT_NODE;
  readonly ATTRIBUTE_NODE: typeof CDomNodeType.ATTRIBUTE_NODE;
  readonly TEXT_NODE: typeof CDomNodeType.TEXT_NODE;
  readonly CDATA_SECTION_NODE: typeof CDomNodeType.CDATA_SECTION_NODE;
  readonly PROCESSING_INSTRUCTION_NODE: typeof CDomNodeType.PROCESSING_INSTRUCTION_NODE;
  readonly COMMENT_NODE: typeof CDomNodeType.COMMENT_NODE;
  readonly DOCUMENT_NODE: typeof CDomNodeType.DOCUMENT_NODE;
  readonly DOCUMENT_TYPE_NODE: typeof CDomNodeType.DOCUMENT_TYPE_NODE;
  readonly DOCUMENT_FRAGMENT_NODE: typeof CDomNodeType.DOCUMENT_FRAGMENT_NODE;

  // Document Positions:
  readonly DOCUMENT_POSITION_DISCONNECTED: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  readonly DOCUMENT_POSITION_PRECEDING: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_PRECEDING;
  readonly DOCUMENT_POSITION_FOLLOWING: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  readonly DOCUMENT_POSITION_CONTAINS: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINS;
  readonly DOCUMENT_POSITION_CONTAINED_BY: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: typeof CDomNodeDocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
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
  childNodes: IDomNode<Node>[];
  firstChild: O.Option<IDomNode<Node>>;
  lastChild: O.Option<IDomNode<Node>>;
  previousSibling: O.Option<IDomNode<Node>>;
  nextSibling: O.Option<IDomNode<Node>>;

  nodeValue: O.Option<string>;
  textContent: O.Option<string>;
  normalize(): void;

  cloneNode(
    deep?: boolean
  ): E.Either<NotSupportedErrorDomException, IDomNode<Node>>;
  isEqualNode(otherNode: Node | IDomNode<Node> | null): boolean;

  // Document position class constants are declared in the interface above.
  compareDocumentPosition(
    other: Node | IDomNode<Node>
  ): CDomNodeDocumentPosition;
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
