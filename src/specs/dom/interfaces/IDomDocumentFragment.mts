import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.mjs";
import type { MDomParentNode } from "../mixins/MDomParentNode.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomDocumentFragmentConstructors
  extends IWrapperConstructors<DocumentFragment> {
  new (): IDomDocumentFragment<DocumentFragment>;
}

export interface IDomDocumentFragment<N extends DocumentFragment>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomParentNode {}
