import type { ISvg2SVGAnimatedPreserveAspectRatio } from "../interfaces/ISvg2SVGAnimatedPreserveAspectRatio.mjs";
import type { ISvg2SVGAnimatedRect } from "../interfaces/ISvg2SVGAnimatedRect.mjs";

export interface MSvg2SVGFitToViewBox {
  readonly viewBox: ISvg2SVGAnimatedRect<SVGAnimatedRect>;
  readonly preserveAspectRatio: ISvg2SVGAnimatedPreserveAspectRatio<SVGAnimatedPreserveAspectRatio>;
}
