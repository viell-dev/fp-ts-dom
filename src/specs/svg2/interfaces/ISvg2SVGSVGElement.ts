import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import type { IGeometry1DOMMatrix } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrix.js";
import type { IGeometry1DOMPoint } from "@/specs/geometry-1/interfaces/IGeometry1DOMPoint.js";
import type { IGeometry1DOMPointReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMPointReadOnly.js";
import type { IGeometry1DOMRect } from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import type { IGeometry1DOMRectReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMRectReadOnly.js";
import type { MHtmlWindowEventHandlers } from "@/specs/html/mixins/MHtmlWindowEventHandlers.js";
import type { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.js";
import type {
  MSvg2SVGZoomAndPan,
  MSvg2SVGZoomAndPanConstants,
} from "../mixins/MSvg2SVGZoomAndPan.js";
import type { ISvg2SVGAngle } from "./ISvg2SVGAngle.js";
import type { ISvg2SVGAnimatedLength } from "./ISvg2SVGAnimatedLength.js";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";
import type { ISvg2SVGLength } from "./ISvg2SVGLength.js";
import type { ISvg2SVGNumber } from "./ISvg2SVGNumber.js";
import type { ISvg2SVGTransform } from "./ISvg2SVGTransform.js";

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
  readonly currentTranslate: IGeometry1DOMPointReadOnly<DOMPointReadOnly>;

  getIntersectionList(
    rect: DOMRectReadOnly | IGeometry1DOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  getEnclosureList(
    rect: DOMRectReadOnly | IGeometry1DOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  checkIntersectionList(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometry1DOMRectReadOnly<DOMRectReadOnly>
  ): boolean;
  checkEnclosureList(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometry1DOMRectReadOnly<DOMRectReadOnly>
  ): boolean;

  deselectAll(): void;

  createSVGNumber(): ISvg2SVGNumber<SVGNumber>;
  createSVGLength(): ISvg2SVGLength<SVGLength>;
  createSVGAngle(): ISvg2SVGAngle<SVGAngle>;
  createSVGPoint(): IGeometry1DOMPoint<DOMPoint>;
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
