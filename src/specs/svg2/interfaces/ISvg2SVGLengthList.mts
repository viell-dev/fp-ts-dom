import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type { ISvg2SVGLength } from "./ISvg2SVGLength.mjs";

export interface ISvg2SVGLengthList<N extends SVGLengthList>
  extends IWrapper<N> {
  readonly length: number;
  readonly numberOfItems: number;

  clear(): void;
  initialize(
    newItem: SVGLength | ISvg2SVGLength<SVGLength>
  ): ISvg2SVGLength<SVGLength>;
  getItem(index: number): E.Either<RangeError, ISvg2SVGLength<SVGLength>>;
  // [index: number]: E.Either<RangeError, ISvg2SVGLength<SVGLength>>;
  inserItemBefore(
    newItem: SVGLength | ISvg2SVGLength<SVGLength>,
    index: number
  ): ISvg2SVGLength<SVGLength>;
  replaceItem(
    newItem: SVGLength | ISvg2SVGLength<SVGLength>,
    index: number
  ): ISvg2SVGLength<SVGLength>;
  removeItem(index: number): ISvg2SVGLength<SVGLength>;
  appendItem(
    newItem: SVGLength | ISvg2SVGLength<SVGLength>
  ): ISvg2SVGLength<SVGLength>;
}
