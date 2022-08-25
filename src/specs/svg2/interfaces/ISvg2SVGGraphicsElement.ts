import type { IGeometry1DOMMatrix } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrix.js";
import type { IGeometry1DOMRect } from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import type * as O from "fp-ts/Option";
import type { DSvg2SVGBoundingBoxOptions } from "../dictionaries/DSvg2SVGBoundingBoxOptions.js";
import type { MSvg2SVGTests } from "../mixins/MSvg2SVGTests.js";
import type { ISvg2SVGAnimatedTransformList } from "./ISvg2SVGAnimatedTransformList.js";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.js";

export interface ISvg2SVGGraphicsElement<N extends SVGGraphicsElement>
  extends ISvg2SVGElement<N>,
    MSvg2SVGTests {
  readonly transform: ISvg2SVGAnimatedTransformList<SVGAnimatedTransformList>;

  getBBox(options?: DSvg2SVGBoundingBoxOptions): IGeometry1DOMRect<DOMRect>;
  getCTM(): O.Option<IGeometry1DOMMatrix<DOMMatrix>>;
  getScreenCTM(): O.Option<IGeometry1DOMMatrix<DOMMatrix>>;
}
