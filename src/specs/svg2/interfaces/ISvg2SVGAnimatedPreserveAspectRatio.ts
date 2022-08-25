import type { IWrapper } from "@/global/IWrapper.js";
import type { ISvg2SVGPreserveAspectRatio } from "./ISvg2SVGPreserveAspectRatio.js";

export interface ISvg2SVGAnimatedPreserveAspectRatio<
  N extends SVGAnimatedPreserveAspectRatio
> extends IWrapper<N> {
  readonly baseVal: ISvg2SVGPreserveAspectRatio<SVGPreserveAspectRatio>;
  readonly animVal: ISvg2SVGPreserveAspectRatio<SVGPreserveAspectRatio>;
}
