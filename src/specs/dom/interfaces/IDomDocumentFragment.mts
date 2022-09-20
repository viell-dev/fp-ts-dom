import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.js";
import type { MDomParentNode } from "../mixins/MDomParentNode.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomDocumentFragmentConstructors
  extends IWrapperConstructors<DocumentFragment> {
  new (): IDomDocumentFragment<DocumentFragment>;
}

export interface IDomDocumentFragment<N extends DocumentFragment>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomParentNode {}
