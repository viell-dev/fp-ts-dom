import type {
  HierarchyRequestErrorDomException,
  InvalidNodeTypeErrorDomException,
  InvalidStateErrorDomException,
  NotSupportedErrorDomException,
  WrongDocumentErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IStringifier } from "@/globals/IStringifier.mjs";
import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CDomRangeHow } from "../constants/CDomRangeHow.mjs";
import type { IDomAbstractRange } from "./IDomAbstractRange.mjs";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomRangeConstructors extends IWrapperConstructors<Range> {
  new (): IDomRange<Range>;
}

export interface IDomRangeConstants {
  START_TO_START: typeof CDomRangeHow.START_TO_START;
  START_TO_END: typeof CDomRangeHow.START_TO_END;
  END_TO_END: typeof CDomRangeHow.END_TO_END;
  END_TO_START: typeof CDomRangeHow.END_TO_START;
}

export interface IDomRange<N extends Range>
  extends IDomAbstractRange<N>,
    IStringifier {
  readonly commonAncestorContainer: IDomNode<Node>;

  setStart(
    node: Node | IDomNode<Node>,
    offset: number
  ): O.Option<InvalidNodeTypeErrorDomException | RangeError>;
  setEnd(
    node: Node | IDomNode<Node>,
    offset: number
  ): O.Option<InvalidNodeTypeErrorDomException | RangeError>;
  setStartBefore(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;
  setStartAfter(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;
  setEndBefore(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;
  setEndAfter(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;
  collapse(toStart?: boolean): void;
  selectNode(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;
  selectNodeContents(
    node: Node | IDomNode<Node>
  ): O.Option<InvalidNodeTypeErrorDomException>;

  // How class constants are declared in the interface above.
  compareBoundaryPoints(
    how: CDomRangeHow,
    sourceRange: Range | IDomRange<Range>
  ): E.Either<
    NotSupportedErrorDomException | WrongDocumentErrorDomException,
    -1 | 0 | 1
  >;

  deleteContents(): void;
  extractContents(): E.Either<
    HierarchyRequestErrorDomException,
    IDomDocumentFragment<DocumentFragment>
  >;
  cloneContents(): E.Either<
    HierarchyRequestErrorDomException,
    IDomDocumentFragment<DocumentFragment>
  >;
  insertNode(
    node: Node | IDomNode<Node>
  ): O.Option<HierarchyRequestErrorDomException>;
  surroundContents(
    newParent: Node | IDomNode<Node>
  ): E.Either<
    InvalidStateErrorDomException | InvalidNodeTypeErrorDomException,
    void
  >;

  cloneRange(): IDomRange<Range>;

  isPointInRange(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, boolean>;
  comparePoint(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<
    | WrongDocumentErrorDomException
    | InvalidNodeTypeErrorDomException
    | RangeError,
    number
  >;

  intersectsNode(node: Node | IDomNode<Node>): boolean;
}
