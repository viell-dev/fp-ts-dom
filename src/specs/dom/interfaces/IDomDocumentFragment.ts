import { MDomNonElementParentNode } from "../mixins/MDomNonElementParentNode.js";
import { MDomParentNode } from "../mixins/MDomParentNode.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomDocumentFragment<N extends DocumentFragment>
  extends IDomNode<N>,
    MDomNonElementParentNode,
    MDomParentNode {}
