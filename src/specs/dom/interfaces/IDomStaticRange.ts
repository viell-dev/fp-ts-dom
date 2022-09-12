import type { InvalidNodeTypeErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { DDomStaticRangeInit } from "../dictionaries/DDomStaticRangeInit.js";
import type { IDomAbstractRange } from "./IDomAbstractRange.js";

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
  ): E.Either<InvalidNodeTypeErrorDomException, StaticRange>;
}

export type IDomStaticRange<N extends StaticRange> = IDomAbstractRange<N>;
