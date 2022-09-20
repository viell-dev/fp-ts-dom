import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface ISvg2SVGAnimatedBoolean<N extends SVGAnimatedBoolean>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
