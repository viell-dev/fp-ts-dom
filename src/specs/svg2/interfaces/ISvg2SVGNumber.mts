import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGNumber<N extends SVGNumber> extends IWrapper<N> {
  value: number;
}
