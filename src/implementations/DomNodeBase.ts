import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomGetRootNodeOptions } from "../dictionaries/DomGetRootNodeOptions.js";
import { DomNodeDocumentPosition } from "../enums/DomNodeDocumentPosition.js";
import { DomNodeType } from "../enums/DomNodeType.js";
import { optional, Optional } from "../helpers/Optional.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import { IDomNode, IDomNodeConstants } from "../interfaces/IDomNode.js";
import { DomDocument } from "./DomDocument.js";
import { DomEventTargetBase } from "./DomEventTargetBase.js";
import { DomNode } from "./DomNode.js";
import { DomNodeList } from "./DomNodeList.js";

@StaticImplements<IDomNodeConstants>()
export class DomNodeBase<N extends Node>
  extends DomEventTargetBase<N>
  implements IDomNode<N>
{
  private childNodesInternal: O.Option<DomNodeList> = O.none;

  static readonly ELEMENT_NODE = DomNodeType.ELEMENT_NODE;
  static readonly ATTRIBUTE_NODE = DomNodeType.ATTRIBUTE_NODE;
  static readonly TEXT_NODE = DomNodeType.TEXT_NODE;
  static readonly CDATA_SECTION_NODE = DomNodeType.CDATA_SECTION_NODE;
  static readonly PROCESSING_INSTRUCTION_NODE =
    DomNodeType.PROCESSING_INSTRUCTION_NODE;
  static readonly COMMENT_NODE = DomNodeType.COMMENT_NODE;
  static readonly DOCUMENT_NODE = DomNodeType.DOCUMENT_NODE;
  static readonly DOCUMENT_TYPE_NODE = DomNodeType.DOCUMENT_TYPE_NODE;
  static readonly DOCUMENT_FRAGMENT_NODE = DomNodeType.DOCUMENT_FRAGMENT_NODE;
  get nodeType(): DomNodeType {
    return this.native.nodeType;
  }
  get nodeName(): string {
    return this.native.nodeName;
  }

  get baseURI(): string {
    return this.native.baseURI;
  }

  get isConnected(): boolean {
    return this.native.isConnected;
  }
  get ownerDocument(): O.Option<DomDocument> {
    return pipe(
      this.native.ownerDocument,
      O.fromNullable,
      O.map((document) => new DomDocument(document))
    );
  }
  getRootNode(options?: Optional<DomGetRootNodeOptions>): DomNode {
    return pipe(
      options,
      optional,
      O.toUndefined,
      this.native.getRootNode,
      (node) => new DomNode(node)
    );
  }
  get parentNode(): O.Option<DomNode> {
    return pipe(
      this.native.parentNode,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get parentElement(): O.Option<DomElement> {
    return pipe(
      this.native.parentElement,
      O.fromNullable,
      O.map((element) => new DomElement(element))
    );
  }
  hasChildNodes(): boolean {
    return this.native.hasChildNodes();
  }
  get childNodes(): DomNodeList {
    if (O.isNone(this.childNodesInternal))
      this.childNodesInternal = O.some(new DomNodeList(this.childNodes));
    else return this.childNodesInternal.value;
  }
  get firstChild(): O.Option<DomNode> {
    return pipe(
      this.native.firstChild,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get lastChild(): O.Option<DomNode> {
    return pipe(
      this.native.lastChild,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get previousSibling(): O.Option<DomNode> {
    return pipe(
      this.native.previousSibling,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get nextSibling(): O.Option<DomNode> {
    return pipe(
      this.native.nextSibling,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }

  get nodeValue(): N extends Attr | CharacterData ? string : null {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
       -- Trusting the spec.
       See: https://dom.spec.whatwg.org/#dom-node-nodevalue */
    return this.native.nodeValue as N extends Attr | CharacterData
      ? string
      : null;
  }
  get textContent(): N extends Attr | CharacterData | DocumentFragment | Element
    ? string
    : null {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
       -- Trusting the spec.
       See: https://dom.spec.whatwg.org/#dom-node-textcontent */
    return this.native.nodeValue as N extends
      | DocumentFragment
      | Element
      | Attr
      | CharacterData
      ? string
      : null;
  }
  normalize(): void {
    this.native.normalize();
  }

  cloneNode(deep?: Optional<boolean>): DomNode {
    return pipe(
      deep,
      optional,
      O.toUndefined,
      this.native.cloneNode,
      (node) => new DomNode(node)
    );
  }
  isEqualNode(otherNode: Node | DomNode | null): boolean {
    return pipe(
      otherNode,
      O.fromNullable,
      O.map((node) => (node instanceof Node ? node : node.getNative())),
      O.toNullable,
      this.native.isEqualNode
    );
  }

  static readonly DOCUMENT_POSITION_DISCONNECTED =
    DomNodeDocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  static readonly DOCUMENT_POSITION_PRECEDING =
    DomNodeDocumentPosition.DOCUMENT_POSITION_PRECEDING;
  static readonly DOCUMENT_POSITION_FOLLOWING =
    DomNodeDocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  static readonly DOCUMENT_POSITION_CONTAINS =
    DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINS;
  static readonly DOCUMENT_POSITION_CONTAINED_BY =
    DomNodeDocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC =
    DomNodeDocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  compareDocumentPosition(other: Node | DomNode): DomNodeDocumentPosition {
    return this.native.compareDocumentPosition(
      other instanceof Node ? other : other.getNative()
    );
  }
  contains(other: Node | DomNode | null): boolean {
    return this.native.contains(
      other === null ? null : other instanceof Node ? other : other.getNative()
    );
  }

  lookupPrefix(namespace: string | null): O.Option<string> {
    return O.fromNullable(this.native.lookupPrefix(namespace));
  }
  lookupNamespaceURI(namespace: string | null): O.Option<string> {
    return O.fromNullable(this.native.lookupNamespaceURI(namespace));
  }
  isDefaultNamespace(namespace: string | null): boolean {
    return this.native.isDefaultNamespace(namespace);
  }

  insertBefore(node: Node | DomNode, child: Node | DomNode | null): DomNode {
    return pipe(
      this.native.insertBefore(
        pipe(node, (node) => (node instanceof Node ? node : node.getNative())),
        pipe(
          child,
          O.fromNullable,
          O.map((node) => (node instanceof Node ? node : node.getNative())),
          O.toNullable
        )
      ),
      (node) => new DomNode(node)
    );
  }
  appendChild(node: Node | DomNode): DomNode {
    return pipe(
      this.native.appendChild(
        pipe(node, (node) => (node instanceof Node ? node : node.getNative()))
      ),
      (node) => new DomNode(node)
    );
  }
  replaceChild(node: Node | DomNode, child: Node | DomNode): DomNode {
    return pipe(
      this.native.replaceChild(
        pipe(node, (node) => (node instanceof Node ? node : node.getNative())),
        pipe(child, (node) => (node instanceof Node ? node : node.getNative()))
      ),
      (node) => new DomNode(node)
    );
  }
  removeChild(child: Node | DomNode): DomNode {
    return pipe(
      this.native.removeChild(
        pipe(child, (node) => (node instanceof Node ? node : node.getNative()))
      ),
      (node) => new DomNode(node)
    );
  }
}
