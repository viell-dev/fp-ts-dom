import type { IWrapper } from "@/global/IWrapper.js";
import type { ISvg2SVGLengthList } from "./ISvg2SVGLengthList.js";

export interface ISvg2SVGAnimatedLengthList<N extends SVGAnimatedLengthList>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGLengthList<SVGLengthList>;
  readonly animVal: ISvg2SVGLengthList<SVGLengthList>;
}
