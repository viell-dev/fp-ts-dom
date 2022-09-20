import type { CDomNodeFilterFilter } from "../constants/CDomNodeFilterFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../constants/CDomNodeFilterWhatToShow.mjs";
import type { IDomNode } from "../interfaces/IDomNode.mjs";

interface CBDomNodeFilterFunction {
  (node: IDomNode<Node>): CDomNodeFilterFilter;
}

export interface CBDomNodeFilterObjectConstants {
  // Constants for acceptNode()
  readonly FILTER_ACCEPT: typeof CDomNodeFilterFilter.FILTER_ACCEPT;
  readonly FILTER_REJECT: typeof CDomNodeFilterFilter.FILTER_REJECT;
  readonly FILTER_SKIP: typeof CDomNodeFilterFilter.FILTER_SKIP;

  // Constants for whatToShow
  readonly SHOW_ALL: typeof CDomNodeFilterWhatToShow.SHOW_ALL;
  readonly SHOW_ELEMENT: typeof CDomNodeFilterWhatToShow.SHOW_ELEMENT;
  readonly SHOW_ATTRIBUTE: typeof CDomNodeFilterWhatToShow.SHOW_ATTRIBUTE;
  readonly SHOW_TEXT: typeof CDomNodeFilterWhatToShow.SHOW_TEXT;
  readonly SHOW_CDATA_SECTION: typeof CDomNodeFilterWhatToShow.SHOW_CDATA_SECTION;
  readonly SHOW_PROCESSING_INSTRUCTION: typeof CDomNodeFilterWhatToShow.SHOW_PROCESSING_INSTRUCTION;
  readonly SHOW_COMMENT: typeof CDomNodeFilterWhatToShow.SHOW_COMMENT;
  readonly SHOW_DOCUMENT: typeof CDomNodeFilterWhatToShow.SHOW_DOCUMENT;
  readonly SHOW_DOCUMENT_TYPE: typeof CDomNodeFilterWhatToShow.SHOW_DOCUMENT_TYPE;
  readonly SHOW_DOCUMENT_FRAGMENT: typeof CDomNodeFilterWhatToShow.SHOW_DOCUMENT_FRAGMENT;
}

export interface CBDomNodeFilterObject {
  acceptNode(node: IDomNode<Node>): CDomNodeFilterFilter;
}

export type CBDomNodeFilter = CBDomNodeFilterFunction | CBDomNodeFilterObject;
