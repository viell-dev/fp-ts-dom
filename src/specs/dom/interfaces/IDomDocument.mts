import type {
  HierarchyRequestErrorDomException,
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
  NotSupportedErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IHtmlDocument } from "@/specs/html/interfaces/IHtmlDocument.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CBDomNodeFilter } from "../callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.mjs";
import type { DDomElementCreationOptions } from "../dictionaries/DDomElementCreationOptions.mjs";
import type { MDomDocumentOrShadowRoot } from "../mixins/MDomDocumentOrShadowRoot.mjs";
import type { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.mjs";
import type { MDomParentNode } from "../mixins/MDomParentNode.mjs";
import type { IDomAttr } from "./IDomAttr.mjs";
import type { IDomCDATASection } from "./IDomCDATASection.mjs";
import type { IDomComment } from "./IDomComment.mjs";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.mjs";
import type { IDomDocumentType } from "./IDomDocumentType.mjs";
import type { IDomDOMImplementation } from "./IDomDOMImplementation.mjs";
import type { IDomElement } from "./IDomElement.mjs";
import type { IDomNode } from "./IDomNode.mjs";
import type { IDomNodeIterator } from "./IDomNodeIterator.mjs";
import type { IDomProcessingInstruction } from "./IDomProcessingInstruction.mjs";
import type { IDomRange } from "./IDomRange.mjs";
import type { IDomText } from "./IDomText.mjs";
import type { IDomTreeWalker } from "./IDomTreeWalker.mjs";

/** @sealed */
export interface IDomDocumentConstructors
  extends IWrapperConstructors<Document> {
  new (): IDomDocument<Document>;
}

export interface IDomDocument<N extends Document>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomDocumentOrShadowRoot,
    MDomParentNode,
    /*MDomXPathEvaluatorBase,*/
    IHtmlDocument<N> /*,
    ISvg2Document<N>*/ {
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
