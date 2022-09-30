import type { IWrapper } from "../../../globals/IWrapper.mjs";

import type { ISvg2SVGLengthList } from "./ISvg2SVGLengthList.mjs";

export interface ISvg2SVGAnimatedLengthList<N extends SVGAnimatedLengthList>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGLengthList<SVGLengthList>;
  readonly animVal: ISvg2SVGLengthList<SVGLengthList>;
}
