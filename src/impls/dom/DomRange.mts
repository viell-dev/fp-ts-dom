import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import type {
  HierarchyRequestErrorDomException,
  InvalidNodeTypeErrorDomException,
  InvalidStateErrorDomException,
  NotSupportedErrorDomException,
  WrongDocumentErrorDomException,
} from "@/exceptions/DomException.mjs";
import { CDomRangeHow } from "@/specs/dom/constants/CDomRangeHow.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type {
  IDomRange,
  IDomRangeConstants,
  IDomRangeConstructors,
} from "@/specs/dom/interfaces/IDomRange.mjs";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DomAbstractRangeBase } from "./DomAbstractRangeBase.mjs";
import { DomDocumentFragment } from "./DomDocumentFragment.mjs";
import { DomNode } from "./DomNode.mjs";

@StaticImplements<IDomRangeConstructors & IDomRangeConstants>()
export class DomRange
  extends DomAbstractRangeBase<Range>
  implements IDomRange<Range>
{
  constructor();
  constructor(range: Range);
  constructor(range?: Range) {
    const nativeRange = range ?? new Range();

    super(nativeRange);
  }

  get commonAncestorContainer(): DomNode {
    return new DomNode(this.native.commonAncestorContainer);
  }

  setStart(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, void> {
    return pipe(
      [node, offset] as const,
      ([node, offset]) =>
        [node instanceof Node ? node : node.getNative(), offset] as const,
      E.tryCatchK(
        (params) => this.native.setStart(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as InvalidNodeTypeErrorDomException | RangeError
      )
    );
  }
  setEnd(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, void> {
    return pipe(
      [node, offset] as const,
      ([node, offset]) =>
        [node instanceof Node ? node : node.getNative(), offset] as const,
      E.tryCatchK(
        (params) => this.native.setEnd(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as InvalidNodeTypeErrorDomException | RangeError
      )
    );
  }
  setStartBefore(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.setStartBefore(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }
  setStartAfter(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.setStartAfter(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }
  setEndBefore(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.setEndBefore(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }
  setEndAfter(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.setEndAfter(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }
  collapse(toStart?: boolean): void {
    this.native.collapse(toStart);
  }
  selectNode(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.selectNode(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }
  selectNodeContents(
    node: Node | IDomNode<Node>
  ): E.Either<InvalidNodeTypeErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.selectNodeContents(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      )
    );
  }

  static readonly START_TO_START = CDomRangeHow.START_TO_START;
  static readonly START_TO_END = CDomRangeHow.START_TO_END;
  static readonly END_TO_END = CDomRangeHow.END_TO_END;
  static readonly END_TO_START = CDomRangeHow.END_TO_START;
  compareBoundaryPoints(
    how: CDomRangeHow,
    sourceRange: Range | IDomRange<Range>
  ): E.Either<
    NotSupportedErrorDomException | WrongDocumentErrorDomException,
    -1 | 0 | 1
  > {
    return pipe(
      [how, sourceRange] as const,
      ([how, sourceRange]) =>
        [
          how,
          sourceRange instanceof Range ? sourceRange : sourceRange.getNative(),
        ] as const,
      E.tryCatchK(
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this only returns -1 (before), 0 (equals) or
            1 (after). */
        (params) => this.native.compareBoundaryPoints(...params) as -1 | 0 | 1,
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | NotSupportedErrorDomException
            | WrongDocumentErrorDomException
      )
    );
  }

  deleteContents(): void {
    this.native.deleteContents();
  }
  extractContents(): E.Either<
    HierarchyRequestErrorDomException,
    DomDocumentFragment
  > {
    return pipe(
      E.tryCatch(
        () => this.native.extractContents(),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      E.map((fragment) => new DomDocumentFragment(fragment))
    );
  }
  cloneContents(): E.Either<
    HierarchyRequestErrorDomException,
    DomDocumentFragment
  > {
    return pipe(
      E.tryCatch(
        () => this.native.cloneContents(),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      ),
      E.map((fragment) => new DomDocumentFragment(fragment))
    );
  }
  insertNode(
    node: Node | IDomNode<Node>
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (node) => this.native.insertNode(node),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  surroundContents(
    newParent: Node | IDomNode<Node>
  ): E.Either<
    InvalidStateErrorDomException | InvalidNodeTypeErrorDomException,
    void
  > {
    return pipe(
      newParent,
      (node) => (node instanceof Node ? node : node.getNative()),
      E.tryCatchK(
        (newParent) => this.native.surroundContents(newParent),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidStateErrorDomException
            | InvalidNodeTypeErrorDomException
      )
    );
  }

  cloneRange(): DomRange {
    return new DomRange(this.native.cloneRange());
  }

  isPointInRange(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<InvalidNodeTypeErrorDomException | RangeError, boolean> {
    return pipe(
      [node, offset] as const,
      ([node, offset]) =>
        [node instanceof Node ? node : node.getNative(), offset] as const,
      E.tryCatchK(
        (params) => this.native.isPointInRange(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as InvalidNodeTypeErrorDomException | RangeError
      )
    );
  }
  comparePoint(
    node: Node | IDomNode<Node>,
    offset: number
  ): E.Either<
    | WrongDocumentErrorDomException
    | InvalidNodeTypeErrorDomException
    | RangeError,
    number
  > {
    return pipe(
      [node, offset] as const,
      ([node, offset]) =>
        [node instanceof Node ? node : node.getNative(), offset] as const,
      E.tryCatchK(
        (params) => this.native.comparePoint(...params),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | WrongDocumentErrorDomException
            | InvalidNodeTypeErrorDomException
            | RangeError
      )
    );
  }

  intersectsNode(node: Node | IDomNode<Node>): boolean {
    return pipe(
      node,
      (node) => (node instanceof Node ? node : node.getNative()),
      (node) => this.native.intersectsNode(node)
    );
  }
}
