import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type { ISvg2SVGNumber } from "./ISvg2SVGNumber.mjs";

export interface ISvg2SVGNumberList<N extends SVGNumberList>
  extends IWrapper<N> {
  readonly length: number;
  readonly numberOfItems: number;

  clear(): void;
  initialize(
    newItem: SVGNumber | ISvg2SVGNumber<SVGNumber>
  ): ISvg2SVGNumber<SVGNumber>;
  getItem(index: number): E.Either<RangeError, ISvg2SVGNumber<SVGNumber>>;
  // [index: number]: E.Either<RangeError, ISvg2SVGNumber<SVGNumber>>;
  inserItemBefore(
    newItem: SVGNumber | ISvg2SVGNumber<SVGNumber>,
    index: number
  ): ISvg2SVGNumber<SVGNumber>;
  replaceItem(
    newItem: SVGNumber | ISvg2SVGNumber<SVGNumber>,
    index: number
  ): ISvg2SVGNumber<SVGNumber>;
  removeItem(index: number): ISvg2SVGNumber<SVGNumber>;
  appendItem(
    newItem: SVGNumber | ISvg2SVGNumber<SVGNumber>
  ): ISvg2SVGNumber<SVGNumber>;
}
