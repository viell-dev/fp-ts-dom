import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import type { NotSupportedErrorDomException } from "@/exceptions/DomException.mjs";
import { getNative, getNativeOrNull } from "@/helpers/getNative.mjs";
import { CDomNodeNodeDocumentPosition } from "@/specs/dom/constants/CDomNodeNodeDocumentPosition.mjs";
import { CDomNodeNodeType } from "@/specs/dom/constants/CDomNodeNodeType.mjs";
import type { DDomGetRootNodeOptions } from "@/specs/dom/dictionaries/DDomGetRootNodeOptions.mjs";
import type {
  IDomNode,
  IDomNodeConstants,
} from "@/specs/dom/interfaces/IDomNode.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
/* import { DomDocument } from "./DomDocument.mjs";
   import { DomElement } from "./DomElement.mjs"; */
import { DomEventTargetBase } from "./DomEventTargetBase.mjs";
import { DomNode } from "./DomNode.mjs";

@StaticImplements<IDomNodeConstants>()
export class DomNodeBase<N extends Node>
  extends DomEventTargetBase<N>
  implements IDomNode<N>
{
  static readonly ELEMENT_NODE = CDomNodeNodeType.ELEMENT_NODE;
  static readonly ATTRIBUTE_NODE = CDomNodeNodeType.ATTRIBUTE_NODE;
  static readonly TEXT_NODE = CDomNodeNodeType.TEXT_NODE;
  static readonly CDATA_SECTION_NODE = CDomNodeNodeType.CDATA_SECTION_NODE;
  static readonly PROCESSING_INSTRUCTION_NODE =
    CDomNodeNodeType.PROCESSING_INSTRUCTION_NODE;
  static readonly COMMENT_NODE = CDomNodeNodeType.COMMENT_NODE;
  static readonly DOCUMENT_NODE = CDomNodeNodeType.DOCUMENT_NODE;
  static readonly DOCUMENT_TYPE_NODE = CDomNodeNodeType.DOCUMENT_TYPE_NODE;
  static readonly DOCUMENT_FRAGMENT_NODE =
    CDomNodeNodeType.DOCUMENT_FRAGMENT_NODE;
  get nodeType(): CDomNodeNodeType {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, the nodeType property returns the value of one
        of the class constants: ELEMENT_NODE (1), ATTRIBUTE_NODE (2),
        TEXT_NODE (3), CDATA_SECTION_NODE (4), PROCESSING_INSTRUCTION_NODE (7),
        COMMENT_NODE (8), DOCUMENT_NODE (9), DOCUMENT_TYPE_NODE (10) and
        DOCUMENT_FRAGMENT_NODE (11) */
    return this.native.nodeType as CDomNodeNodeType;
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
  /* get ownerDocument(): O.Option<DomDocument> {
    return pipe(
      O.fromNullable(this.native.ownerDocument),
      O.map((document) => new DomDocument(document))
    );
  } */
  getRootNode(options?: DDomGetRootNodeOptions): DomNode {
    return pipe(this.native.getRootNode(options), (node) => new DomNode(node));
  }
  get parentNode(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.parentNode),
      O.map((node) => new DomNode(node))
    );
  }
  /*get parentElement(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.parentElement),
      O.map((element) => new DomElement(element))
    );
  }*/
  hasChildNodes(): boolean {
    return this.native.hasChildNodes();
  }
  get childNodes(): DomNode[] {
    return pipe(
      Array.from(this.native.childNodes),
      A.map((node) => new DomNode(node))
    );
  }
  get firstChild(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.firstChild),
      O.map((node) => new DomNode(node))
    );
  }
  get lastChild(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.lastChild),
      O.map((node) => new DomNode(node))
    );
  }
  get previousSibling(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.previousSibling),
      O.map((node) => new DomNode(node))
    );
  }
  get nextSibling(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.nextSibling),
      O.map((node) => new DomNode(node))
    );
  }

  get nodeValue(): O.Option<string> {
    return O.fromNullable(this.native.nodeValue);
  }
  get textContent(): O.Option<string> {
    return O.fromNullable(this.native.textContent);
  }
  normalize(): void {
    this.native.normalize();
  }

  cloneNode(deep?: boolean): E.Either<NotSupportedErrorDomException, DomNode> {
    return pipe(
      E.tryCatch(
        () => this.native.cloneNode(deep),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      E.map((node) => new DomNode(node))
    );
  }
  isEqualNode(otherNode: Node | IDomNode<Node> | null): boolean {
    return pipe(getNativeOrNull(otherNode), this.native.isEqualNode);
  }

  static readonly DOCUMENT_POSITION_DISCONNECTED =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  static readonly DOCUMENT_POSITION_PRECEDING =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_PRECEDING;
  static readonly DOCUMENT_POSITION_FOLLOWING =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  static readonly DOCUMENT_POSITION_CONTAINS =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_CONTAINS;
  static readonly DOCUMENT_POSITION_CONTAINED_BY =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC =
    CDomNodeNodeDocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  compareDocumentPosition(
    other: Node | IDomNode<Node>
  ): CDomNodeNodeDocumentPosition {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, the compareDocumentPosition() method returns the
        value of one of the class constants:
        DOCUMENT_POSITION_DISCONNECTED (0x01),
        DOCUMENT_POSITION_PRECEDING (0x02),
        DOCUMENT_POSITION_FOLLOWING (0x04),
        DOCUMENT_POSITION_CONTAINS (0x08),
        DOCUMENT_POSITION_CONTAINED_BY (0x10) and
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC (0x20) */
    return pipe(
      getNative(other),
      this.native.compareDocumentPosition
    ) as CDomNodeNodeDocumentPosition;
  }
  contains(other: Node | IDomNode<Node> | null): boolean {
    return pipe(getNativeOrNull(other), this.native.contains);
  }

  lookupPrefix(namespace: string | null): O.Option<string> {
    return pipe(this.native.lookupPrefix(namespace), O.fromNullable);
  }
  lookupNamespaceURI(namespace: string | null): O.Option<string> {
    return pipe(this.native.lookupNamespaceURI(namespace), O.fromNullable);
  }
  isDefaultNamespace(namespace: string | null): boolean {
    return this.native.isDefaultNamespace(namespace);
  }

  insertBefore(
    node: Node | IDomNode<Node>,
    child: Node | IDomNode<Node> | null
  ): DomNode {
    return pipe(
      [getNative(node), getNativeOrNull(child)] as const,
      (params) => this.native.insertBefore(...params),
      (node) => new DomNode(node)
    );
  }

  appendChild(node: Node | IDomNode<Node>): DomNode {
    return pipe(
      getNative(node),
      this.native.appendChild,
      (node) => new DomNode(node)
    );
  }
  replaceChild(
    node: Node | IDomNode<Node>,
    child: Node | IDomNode<Node>
  ): DomNode {
    return pipe(
      [getNative(node), getNative(child)] as const,
      (params) => this.native.replaceChild(...params),
      (node) => new DomNode(node)
    );
  }
  removeChild(child: Node | IDomNode<Node>): DomNode {
    return pipe(
      getNative(child),
      this.native.removeChild,
      (node) => new DomNode(node)
    );
  }
}
