import { IGeometry1DOMRect } from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import { IGeometry1DOMRectReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMRectReadOnly.js";
import { IWrapper } from "@/wrapper/IWrapper.js";

export interface ISvg2SVGAnimatedRect<N extends SVGAnimatedRect>
  extends IWrapper<N> {
  readonly baseVal: IGeometry1DOMRect<DOMRect>;
  readonly animVal: IGeometry1DOMRectReadOnly<DOMRectReadOnly>;
}
