import type { IWrapper } from "@/globals/IWrapper.js";

export interface ISvg2SVGNumber<N extends SVGNumber> extends IWrapper<N> {
  value: number;
}
