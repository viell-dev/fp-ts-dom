import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IGeometryDOMRect } from "@/specs/geometry/interfaces/IGeometryDOMRect.mjs";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.mjs";

export interface ISvg2SVGAnimatedRect<N extends SVGAnimatedRect>
  extends IWrapper<N> {
  readonly baseVal: IGeometryDOMRect<DOMRect>;
  readonly animVal: IGeometryDOMRectReadOnly<DOMRectReadOnly>;
}
