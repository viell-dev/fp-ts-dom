import type { IWrapper } from "@/globals/IWrapper.js";

export interface ISvg2SVGAnimatedBoolean<N extends SVGAnimatedBoolean>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
