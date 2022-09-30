import type { IWrapper } from "../../../globals/IWrapper.mjs";

import type { ISvg2SVGTransformList } from "./ISvg2SVGTransformList.mjs";

export interface ISvg2SVGAnimatedTransformList<
  N extends SVGAnimatedTransformList
> extends IWrapper<N> {
  readonly baseVal: ISvg2SVGTransformList<SVGTransformList>;
  readonly animVal: ISvg2SVGTransformList<SVGTransformList>;
}
