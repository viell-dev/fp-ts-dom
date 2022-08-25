import type { IWrapper } from "@/global/IWrapper.js";

export interface ISvg2SVGAnimatedNumber<N extends SVGAnimatedNumber>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
