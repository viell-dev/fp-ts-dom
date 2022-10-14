import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGAnimatedInteger<N extends SVGAnimatedInteger>
  extends IWrapper<N> {
  baseVal: number;
  readonly animVal: number;
}
