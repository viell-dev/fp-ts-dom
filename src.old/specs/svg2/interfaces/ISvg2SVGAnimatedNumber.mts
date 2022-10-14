import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGAnimatedNumber<N extends SVGAnimatedNumber>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
