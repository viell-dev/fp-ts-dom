import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGAnimatedEnumeration<N extends SVGAnimatedEnumeration>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
