import type { DGeometry1DOMPointInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMPointInit.js";
import type { IGeomtery1DOMPoint } from "@/specs/geometry-1/interfaces/IGeomtery1DOMPoint.js";
import type { ISvg2SVGAnimatedNumber } from "./ISvg2SVGAnimatedNumber.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";

export interface ISvg2SVGGeometryElement<N extends SVGGeometryElement>
  extends ISvg2SVGGraphicsElement<N> {
  readonly pathLenght: ISvg2SVGAnimatedNumber<SVGAnimatedNumber>;

  isPointInFill(point?: DGeometry1DOMPointInit): boolean;
  isPointInStroke(point?: DGeometry1DOMPointInit): boolean;
  getTotalLength(): number;
  getPointAtLength(distance: number): IGeomtery1DOMPoint<DOMPoint>;
}
