import { IWrapper } from "@/wrapper/IWrapper.js";
import { ISvg2SVGLength } from "./ISvg2SVGLength.js";

export interface ISvg2SVGAnimatedLength<N extends SVGAnimatedLength>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGLength<SVGLength>;
  readonly animVal: ISvg2SVGLength<SVGLength>;
}
