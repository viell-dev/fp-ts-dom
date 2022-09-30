import type { DGeometryDOMPointInit } from "../../geometry/dictionaries/DGeometryDOMPointInit.mjs";
import type { IGeometryDOMPoint } from "../../geometry/interfaces/IGeometryDOMPoint.mjs";
import type { ISvg2SVGAnimatedNumber } from "./ISvg2SVGAnimatedNumber.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

export interface ISvg2SVGGeometryElement<N extends SVGGeometryElement>
  extends ISvg2SVGGraphicsElement<N> {
  readonly pathLength: ISvg2SVGAnimatedNumber<SVGAnimatedNumber>;

  isPointInFill(point?: DGeometryDOMPointInit): boolean;
  isPointInStroke(point?: DGeometryDOMPointInit): boolean;
  getTotalLength(): number;
  getPointAtLength(distance: number): IGeometryDOMPoint<DOMPoint>;
}
