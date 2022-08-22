import { IDomAbstractRange } from "./IDomAbstractRange.js";
import { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomRange<N extends Range> extends IDomAbstractRange<N> {
  readonly commonAncestorContainer: IDomNode<Node>;

  setStart(node: Node | IDomNode<Node>, offset: number): void;
  setEnd(node: Node | IDomNode<Node>, offset: number): void;
  setStartBefore(node: Node | IDomNode<Node>): void;
  setStartAfter(node: Node | IDomNode<Node>): void;
  setEndBefore(node: Node | IDomNode<Node>): void;
  setEndAfter(node: Node | IDomNode<Node>): void;
  collapse(toStart?: boolean): void;
  selectNode(node: Node | IDomNode<Node>): void;
  selectNodeContents(node: Node | IDomNode<Node>): void;

  compareBoundryPoints(how: number, sourceRange: IDomRange<Range>): number;

  deleteContents(): void;
  extractContents(): IDomDocumentFragment<DocumentFragment>;
  cloneContents(): IDomDocumentFragment<DocumentFragment>;
  insertNode(node: Node | IDomNode<Node>): void;
  surroundContents(newParent: Node | IDomNode<Node>): void;

  cloneRange(): IDomRange<Range>;
  detach(): void;

  isPointInRange(node: Node | IDomNode<Node>, offset: number): boolean;
  comparePoint(node: Node | IDomNode<Node>, offset: number): number;

  intersectsNode(node: Node | IDomNode<Node>): boolean;
}
