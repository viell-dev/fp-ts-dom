import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.mjs";
import type { IGeometryDOMMatrix } from "@/specs/geometry/interfaces/IGeometryDOMMatrix.mjs";
import type { IGeometryDOMPoint } from "@/specs/geometry/interfaces/IGeometryDOMPoint.mjs";
import type { IGeometryDOMPointReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMPointReadOnly.mjs";
import type { IGeometryDOMRect } from "@/specs/geometry/interfaces/IGeometryDOMRect.mjs";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.mjs";
import type { MHtmlWindowEventHandlers } from "@/specs/html/mixins/MHtmlWindowEventHandlers.mjs";
import type { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.mjs";
import type {
  MSvg2SVGZoomAndPan,
  MSvg2SVGZoomAndPanConstants,
} from "../mixins/MSvg2SVGZoomAndPan.mjs";
import type { ISvg2SVGAngle } from "./ISvg2SVGAngle.mjs";
import type { ISvg2SVGAnimatedLength } from "./ISvg2SVGAnimatedLength.mjs";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";
import type { ISvg2SVGLength } from "./ISvg2SVGLength.mjs";
import type { ISvg2SVGNumber } from "./ISvg2SVGNumber.mjs";
import type { ISvg2SVGTransform } from "./ISvg2SVGTransform.mjs";

export type ISvg2SVGSVGElementConstants = MSvg2SVGZoomAndPanConstants;

export interface ISvg2SVGSVGElement<N extends SVGSVGElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGFitToViewBox,
    MSvg2SVGZoomAndPan,
    MHtmlWindowEventHandlers {
  readonly x: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly y: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly width: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly height: ISvg2SVGAnimatedLength<SVGAnimatedLength>;

  currentScale: number;
  readonly currentTranslate: IGeometryDOMPointReadOnly<DOMPointReadOnly>;

  getIntersectionList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  getEnclosureList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  checkIntersection(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>
  ): boolean;
  checkEnclosure(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>
  ): boolean;

  deselectAll(): void;

  createSVGNumber(): ISvg2SVGNumber<SVGNumber>;
  createSVGLength(): ISvg2SVGLength<SVGLength>;
  createSVGAngle(): ISvg2SVGAngle<SVGAngle>;
  createSVGPoint(): IGeometryDOMPoint<DOMPoint>;
  createSVGMatrix(): IGeometryDOMMatrix<DOMMatrix>;
  createSVGRect(): IGeometryDOMRect<DOMRect>;
  createSVGTransform(): ISvg2SVGTransform<SVGTransform>;
  createSVGTransformFromMatrix(
    matrix: DOMMatrixReadOnly
  ): ISvg2SVGTransform<SVGTransform>;

  getElementById(elementId: string): IDomElement<Element>;
}
