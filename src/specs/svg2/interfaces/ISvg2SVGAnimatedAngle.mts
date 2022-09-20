import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { ISvg2SVGAngle } from "./ISvg2SVGAngle.mjs";

export interface ISvg2SVGAnimatedAngle<N extends SVGAnimatedAngle>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGAngle<SVGAngle>;
  readonly animVal: ISvg2SVGAngle<SVGAngle>;
}
