import type { DGeometryDOMPointInit } from "@/specs/geometry/dictionaries/DGeometryDOMPointInit.js";
import type { IGeometryDOMPoint } from "@/specs/geometry/interfaces/IGeometryDOMPoint.js";
import type { ISvg2SVGAnimatedNumber } from "./ISvg2SVGAnimatedNumber.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";

export interface ISvg2SVGGeometryElement<N extends SVGGeometryElement>
  extends ISvg2SVGGraphicsElement<N> {
  readonly pathLenght: ISvg2SVGAnimatedNumber<SVGAnimatedNumber>;

  isPointInFill(point?: DGeometryDOMPointInit): boolean;
  isPointInStroke(point?: DGeometryDOMPointInit): boolean;
  getTotalLength(): number;
  getPointAtLength(distance: number): IGeometryDOMPoint<DOMPoint>;
}
