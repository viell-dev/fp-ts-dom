import type { IWrapper } from "@/globals/IWrapper.js";
import type { ISvg2SVGTransformList } from "./ISvg2SVGTransformList.js";

export interface ISvg2SVGAnimatedTransformList<
  N extends SVGAnimatedTransformList
> extends IWrapper<N> {
  readonly baseVal: ISvg2SVGTransformList<SVGTransformList>;
  readonly animVal: ISvg2SVGTransformList<SVGTransformList>;
}
