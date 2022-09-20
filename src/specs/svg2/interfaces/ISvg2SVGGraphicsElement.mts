import type { IGeometryDOMMatrix } from "@/specs/geometry/interfaces/IGeometryDOMMatrix.mjs";
import type { IGeometryDOMRect } from "@/specs/geometry/interfaces/IGeometryDOMRect.mjs";
import type * as O from "fp-ts/Option";
import type { DSvg2SVGBoundingBoxOptions } from "../dictionaries/DSvg2SVGBoundingBoxOptions.mjs";
import type { MSvg2SVGTests } from "../mixins/MSvg2SVGTests.mjs";
import type { ISvg2SVGAnimatedTransformList } from "./ISvg2SVGAnimatedTransformList.mjs";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.mjs";

export interface ISvg2SVGGraphicsElement<N extends SVGGraphicsElement>
  extends ISvg2SVGElement<N>,
    MSvg2SVGTests {
  readonly transform: ISvg2SVGAnimatedTransformList<SVGAnimatedTransformList>;

  getBBox(options?: DSvg2SVGBoundingBoxOptions): IGeometryDOMRect<DOMRect>;
  getCTM(): O.Option<IGeometryDOMMatrix<DOMMatrix>>;
  getScreenCTM(): O.Option<IGeometryDOMMatrix<DOMMatrix>>;
}
