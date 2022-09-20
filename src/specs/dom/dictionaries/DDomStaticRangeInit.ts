import type { IDomNode } from "../interfaces/IDomNode.js";

export interface DDomStaticRangeInit {
  startContainer: Node | IDomNode<Node>;
  startOffset: number;
  endContainer: Node | IDomNode<Node>;
  endOffset: number;
}
