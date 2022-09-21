import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";

export interface IHtmlTimeRanges<N extends TimeRanges> extends IWrapper<N> {
  readonly length: number;
  start(index: number): E.Either<RangeError, number>;
  end(index: number): E.Either<RangeError, number>;
}
