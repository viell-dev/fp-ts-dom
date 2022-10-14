import type { IDomNode } from "../interfaces/IDomNode.mjs";

export interface DDomStaticRangeInit {
  startContainer: Node | IDomNode<Node>;
  startOffset: number;
  endContainer: Node | IDomNode<Node>;
  endOffset: number;
}
