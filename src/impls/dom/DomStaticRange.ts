import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { InvalidNodeTypeErrorDomException } from "@/exceptions/DomException.js";
import type { DDomStaticRangeInit } from "@/specs/dom/dictionaries/DDomStaticRangeInit.js";
import type {
  IDomStaticRange,
  IDomStaticRangeConstructors,
} from "@/specs/dom/interfaces/IDomStaticRange.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DomAbstractRangeBase } from "./DomAbstractRangeBase.js";

@StaticImplements<IDomStaticRangeConstructors>()
export class DomStaticRange
  extends DomAbstractRangeBase<StaticRange>
  implements IDomStaticRange<StaticRange>
{
  constructor(range: StaticRange);
  constructor(init: DDomStaticRangeInit);
  constructor(rangeOrInit: StaticRange | DDomStaticRangeInit) {
    const nativeRange =
      rangeOrInit instanceof StaticRange
        ? rangeOrInit
        : pipe(
            rangeOrInit,
            (init): StaticRangeInit => ({
              startContainer:
                init.startContainer instanceof Node
                  ? init.startContainer
                  : init.startContainer.getNative(),
              startOffset: init.startOffset,
              endContainer:
                init.endContainer instanceof Node
                  ? init.endContainer
                  : init.endContainer.getNative(),
              endOffset: init.endOffset,
            }),
            (init) => new StaticRange(init)
          );

    super(nativeRange);
  }

  static create(
    init: DDomStaticRangeInit
  ): E.Either<InvalidNodeTypeErrorDomException, DomStaticRange> {
    return pipe(
      init,
      (init): StaticRangeInit => ({
        startContainer:
          init.startContainer instanceof Node
            ? init.startContainer
            : init.startContainer.getNative(),
        startOffset: init.startOffset,
        endContainer:
          init.endContainer instanceof Node
            ? init.endContainer
            : init.endContainer.getNative(),
        endOffset: init.endOffset,
      }),
      E.tryCatchK(
        (init) => new StaticRange(init),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InvalidNodeTypeErrorDomException
      ),
      E.map((nativeStaticRange) => new this(nativeStaticRange))
    );
  }
}
