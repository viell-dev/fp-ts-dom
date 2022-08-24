import { IWrapper } from "@/wrapper/IWrapper.js";
import { ISvg2SVGPreserveAspectRatio } from "./ISvg2SVGPreserveAspectRatio.js";

export interface ISvg2SVGAnimatedPreserveAspectRatio<
  N extends SVGAnimatedPreserveAspectRatio
> extends IWrapper<N> {
  readonly baseVal: ISvg2SVGPreserveAspectRatio<SVGPreserveAspectRatio>;
  readonly animVal: ISvg2SVGPreserveAspectRatio<SVGPreserveAspectRatio>;
}
