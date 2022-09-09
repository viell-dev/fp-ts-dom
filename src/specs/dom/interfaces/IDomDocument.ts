import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotSupportedErrorDomException,
} from "@/exceptions/DomException.js";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.js";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.js";
import type { DDomElementCreationOptions } from "../dictionaries/DDomElementCreationOptions.js";
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
import type { IDomNode } from "./IDomNode.js";
import type { IDomNodeIterator } from "./IDomNodeIterator.js";
import type { IDomProcessingInstruction } from "./IDomProcessingInstruction.js";
import type { IDomRange } from "./IDomRange.js";
import type { IDomText } from "./IDomText.js";
import type { IDomTreeWalker } from "./IDomTreeWalker.js";

export interface IDomDocument<N extends Document>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomDocumentOrShadowRoot,
    MDomParentNode /*,
    MDomXPathEvaluatorBase,
    IHtmlDocument,
    ISvg2Document*/ {
  readonly implementation: IDomDOMImplementation<DOMImplementation>;
  readonly URL: string;
  readonly documentURI: string;
  readonly compatMode: string;
  readonly characterSet: string;
  readonly contentType: string;

  readonly doctype: O.Option<IDomDocumentType<DocumentType>>;
  readonly documentElement: O.Option<IDomElement<Element>>;
  getElementsByTagName(qualifiedName: string): IDomElement<Element>[];
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string
  ): IDomElement<Element>[];
  getElementsByClassName(qualifiedName: string): IDomElement<Element>[];

  createElement(
    localName: string,
    options?: string | DDomElementCreationOptions
  ): E.Either<
    InvalidCharacterErrorDomException | NotSupportedErrorDomException,
    IDomElement<Element>
  >;
  createElementNS(
    namespace: string | null,
    qualifiedName: string,
    options?: string | DDomElementCreationOptions
  ): E.Either<
    | InvalidCharacterErrorDomException
    | NamespaceErrorDomException
    | NotSupportedErrorDomException,
    IDomElement<Element>
  >;
  createDocumentFragment(): IDomDocumentFragment<DocumentFragment>;
  createTextNode(data: string): IDomText<Text>;
  createCDATASection(
    data: string
  ): E.Either<
    NotSupportedErrorDomException | InvalidCharacterErrorDomException,
    IDomCDATASection<CDATASection>
  >;
  createComment(data: string): IDomComment<Comment>;
  createProcessingInstruction(
    target: string,
    data: string
  ): E.Either<
    InvalidCharacterErrorDomException,
    IDomProcessingInstruction<ProcessingInstruction>
  >;

  importNode(
    node: Node | IDomNode<Node>,
    deep?: boolean
  ): E.Either<NotSupportedErrorDomException, IDomNode<Node>>;
  adoptNode(
    node: Node | IDomNode<Node>
  ): E.Either<
    NotSupportedErrorDomException | HierarchyRequestErrorDomException,
    IDomNode<Node>
  >;

  createAttribute(
    localName: string
  ): E.Either<InvalidCharacterErrorDomException, IDomAttr<Attr>>;
  createAttributeNS(
    namespace: string | null,
    qualifiedName: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomAttr<Attr>
  >;

  createRange(): IDomRange<Range>;

  createNodeIterator(
    root: Node | IDomNode<Node>,
    whatToShow?: CDomNodeFilterWhatToShow,
    filter?: CBDomNodeFilter | null
  ): IDomNodeIterator<NodeIterator>;
  createTreeWalker(
    root: Node | IDomNode<Node>,
    whatToShow?: CDomNodeFilterWhatToShow,
    filter?: CBDomNodeFilter | null
  ): IDomTreeWalker<TreeWalker>;
}
