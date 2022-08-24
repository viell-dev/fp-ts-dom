import { ISvg2SVGAnimatedPreserveAspectRatio } from "../interfaces/ISvg2SVGAnimatedPreserveAspectRatio.js";
import { ISvg2SVGAnimatedRect } from "../interfaces/ISvg2SVGAnimatedRect.js";

export interface MSvg2SVGFitToViewBox {
  readonly viewBox: ISvg2SVGAnimatedRect<SVGAnimatedRect>;
  readonly preserveAspectRatio: ISvg2SVGAnimatedPreserveAspectRatio<SVGAnimatedPreserveAspectRatio>;
}
