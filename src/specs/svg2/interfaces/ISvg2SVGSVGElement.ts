import { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import { IGeometry1DOMMatrix } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrix.js";
import { IGeometry1DOMRect } from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import { IGeomtery1DOMPoint } from "@/specs/geometry-1/interfaces/IGeomtery1DOMPoint.js";
import { IGeomtery1DOMPointReadOnly } from "@/specs/geometry-1/interfaces/IGeomtery1DOMPointReadOnly.js";
import { IGeomtery1DOMRectReadOnly } from "@/specs/geometry-1/interfaces/IGeomtery1DOMRectReadOnly.js";
import { MHtmlWindowEventHandlers } from "@/specs/html/mixins/MHtmlWindowEventHandlers.js";
import { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.js";
import { MSvg2SVGZoomAndPan } from "../mixins/MSvg2SVGZoomAndPan.js";
import { ISvg2SVGAngle } from "./ISvg2SVGAngle.js";
import { ISvg2SVGAnimatedLength } from "./ISvg2SVGAnimatedLength.js";
import { ISvg2SVGElement } from "./ISvg2SVGElement.js";
import { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";
import { ISvg2SVGLength } from "./ISvg2SVGLength.js";
import { ISvg2SVGNumber } from "./ISvg2SVGNumber.js";
import { ISvg2SVGTransform } from "./ISvg2SVGTransform.js";

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
  readonly currentTranslate: IGeomtery1DOMPointReadOnly<DOMPointReadOnly>;

  getIntersectionList(
    rect: DOMRectReadOnly | IGeomtery1DOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  getEnclosureList(
    rect: DOMRectReadOnly | IGeomtery1DOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  checkIntersectionList(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeomtery1DOMRectReadOnly<DOMRectReadOnly>
  ): boolean;
  checkEnclosureList(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeomtery1DOMRectReadOnly<DOMRectReadOnly>
  ): boolean;

  deselectAll(): void;

  createSVGNumber(): ISvg2SVGNumber<SVGNumber>;
  createSVGLength(): ISvg2SVGLength<SVGLength>;
  createSVGAngle(): ISvg2SVGAngle<SVGAngle>;
  createSVGPoint(): IGeomtery1DOMPoint<DOMPoint>;
  createSVGMatrix(): IGeometry1DOMMatrix<DOMMatrix>;
  createSVGRect(): IGeometry1DOMRect<DOMRect>;
  createSVGTransform(): ISvg2SVGTransform<SVGTransform>;
  createSVGTransformFromMatrix(
    matrix: DOMMatrixReadOnly
  ): ISvg2SVGTransform<SVGTransform>;

  getElementById(elementId: string): IDomElement<Element>;

  /** @deprecated Does nothing anymore. */
  suspendRedraw(maxWaitMilliseconds: number): number;
  /** @deprecated Does nothing anymore. */
  unsuspendRedraw(): void;
  /** @deprecated Does nothing anymore. */
  unsuspendRedrawAll(): void;
  /** @deprecated Does nothing anymore. */
  forceRedraw(): void;
}
