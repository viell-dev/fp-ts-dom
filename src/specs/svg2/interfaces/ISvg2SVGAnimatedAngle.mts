import type { IWrapper } from "@/globals/IWrapper.js";
import type { ISvg2SVGAngle } from "./ISvg2SVGAngle.js";

export interface ISvg2SVGAnimatedAngle<N extends SVGAnimatedAngle>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGAngle<SVGAngle>;
  readonly animVal: ISvg2SVGAngle<SVGAngle>;
}
