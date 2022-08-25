import type { IWrapper } from "@/global/IWrapper.js";
import type { IGeometry1DOMRect } from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import type { IGeometry1DOMRectReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMRectReadOnly.js";

export interface ISvg2SVGAnimatedRect<N extends SVGAnimatedRect>
  extends IWrapper<N> {
  readonly baseVal: IGeometry1DOMRect<DOMRect>;
  readonly animVal: IGeometry1DOMRectReadOnly<DOMRectReadOnly>;
}
