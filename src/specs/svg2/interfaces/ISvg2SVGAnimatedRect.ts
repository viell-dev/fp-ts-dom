import type { IWrapper } from "@/global/IWrapper.js";
import type { IGeometryDOMRect } from "@/specs/geometry/interfaces/IGeometryDOMRect.js";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.js";

export interface ISvg2SVGAnimatedRect<N extends SVGAnimatedRect>
  extends IWrapper<N> {
  readonly baseVal: IGeometryDOMRect<DOMRect>;
  readonly animVal: IGeometryDOMRectReadOnly<DOMRectReadOnly>;
}
