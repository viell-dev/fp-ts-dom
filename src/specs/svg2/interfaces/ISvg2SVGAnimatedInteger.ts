import type { IWrapper } from "@/global/IWrapper.js";

export interface ISvg2SVGAnimatedInteger<N extends SVGAnimatedInteger>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
