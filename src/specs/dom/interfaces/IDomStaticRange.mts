import type { InvalidNodeTypeErrorDomException } from "@/exceptions/DomException.mjs";
import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type { DDomStaticRangeInit } from "../dictionaries/DDomStaticRangeInit.mjs";
import type { IDomAbstractRange } from "./IDomAbstractRange.mjs";

export interface IDomStaticRangeConstructors
  extends IWrapperConstructors<StaticRange> {
  /**
   * Use {@link create} instead to get an `E.Either`.
   *
   * @throws "InvalidNodeTypeError" DOMException
   */
  new (init: DDomStaticRangeInit): IDomStaticRange<StaticRange>;

  create(
    init: DDomStaticRangeInit
  ): E.Either<InvalidNodeTypeErrorDomException, IDomStaticRange<StaticRange>>;
}

export type IDomStaticRange<N extends StaticRange> = IDomAbstractRange<N>;
