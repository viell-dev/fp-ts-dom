import type { IWrapper } from "@/globals/IWrapper.js";
import type { ISvg2SVGLength } from "./ISvg2SVGLength.js";

export interface ISvg2SVGAnimatedLength<N extends SVGAnimatedLength>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGLength<SVGLength>;
  readonly animVal: ISvg2SVGLength<SVGLength>;
}
