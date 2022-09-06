import type { IWrapper } from "@/globals/IWrapper.js";

export interface ISvg2SVGAnimatedEnumeration<N extends SVGAnimatedEnumeration>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
