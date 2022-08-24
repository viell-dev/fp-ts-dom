import { IWrapper } from "@/wrapper/IWrapper.js";
import { ISvg2SVGTransformList } from "./ISvg2SVGTransformList.js";

export interface ISvg2SVGAnimatedTransformList<
  N extends SVGAnimatedTransformList
> extends IWrapper<N> {
  readonly baseVal: ISvg2SVGTransformList<SVGTransformList>;
  readonly animVal: ISvg2SVGTransformList<SVGTransformList>;
}
