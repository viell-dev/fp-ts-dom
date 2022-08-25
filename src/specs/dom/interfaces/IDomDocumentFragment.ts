import type { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.js";
import type { MDomParentNode } from "../mixins/MDomParentNode.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomDocumentFragment<N extends DocumentFragment>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomParentNode {}
