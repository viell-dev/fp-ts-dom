import type { IndexSizeErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapper } from "@/global/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { ISvg2SVGNumber } from "./ISvg2SVGNumber.js";

export interface ISvg2SVGNumberList<N extends SVGNumberList>
  extends IWrapper<N> {
  readonly length: number;
  readonly numberOfItems: number;

  clear(): void;
  initialize(
    newItem: SVGNumber | ISvg2SVGNumber<SVGNumber>
  ): ISvg2SVGNumber<SVGNumber>;
  getItem(
    index: number
  ): E.Either<IndexSizeErrorDomException, ISvg2SVGNumber<SVGNumber>>;
  // [index: number]: E.Either<IndexSizeErrorDomException, ISvg2SVGNumber<SVGNumber>>;
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
