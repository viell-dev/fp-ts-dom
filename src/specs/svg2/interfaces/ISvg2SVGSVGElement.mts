import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import type { IGeometryDOMMatrix } from "@/specs/geometry/interfaces/IGeometryDOMMatrix.js";
import type { IGeometryDOMPoint } from "@/specs/geometry/interfaces/IGeometryDOMPoint.js";
import type { IGeometryDOMPointReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMPointReadOnly.js";
import type { IGeometryDOMRect } from "@/specs/geometry/interfaces/IGeometryDOMRect.js";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.js";
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
  readonly currentTranslate: IGeometryDOMPointReadOnly<DOMPointReadOnly>;

  getIntersectionList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  getEnclosureList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): IDomNodeList<NodeList>;
  checkIntersectionList(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>
  ): boolean;
  checkEnclosureList(
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

  /** @deprecated Does nothing anymore. */
  suspendRedraw(maxWaitMilliseconds: number): number;
  /** @deprecated Does nothing anymore. */
  unsuspendRedraw(): void;
  /** @deprecated Does nothing anymore. */
  unsuspendRedrawAll(): void;
  /** @deprecated Does nothing anymore. */
  forceRedraw(): void;
}
