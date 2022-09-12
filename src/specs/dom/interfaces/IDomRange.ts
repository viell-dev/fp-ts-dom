import type {
  HierarchyRequestErrorDomException,
  InvalidNodeTypeErrorDomException,
  InvalidStateErrorDomException,
  NotSupportedErrorDomException,
  WrongDocumentErrorDomException,
} from "@/exceptions/DomException.js";
import type { IStringifier } from "@/globals/IStringifier.js";
import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { CDomRangeHow } from "../constants/CDomRangeHow.js";
import type { IDomAbstractRange } from "./IDomAbstractRange.js";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import type { IDomNode } from "./IDomNode.js";

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
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, void>;
  setEnd(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, void>;
  setStartBefore(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;
  setStartAfter(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;
  setEndBefore(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;
  setEndAfter(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;
  collapse(toStart?: boolean): void;
  selectNode(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;
  selectNodeContents(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void>;

  // How class constants are declared in the interface above.
  compareBoundaryPoints(
    how: CDomRangeHow,
    sourceRange: IDomRange<Range>
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
  ): E.Either<HierarchyRequestErrorDomException, void>;
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
