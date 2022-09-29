import { getNative, getNativeOrNull } from "@/helpers/getNative.mjs";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";
import type { IGeometryDOMMatrixReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.mjs";
import type {
  MissingEventHandler,
  THtmlEventHandler,
} from "@/specs/html/types/THtmlEventHandler.mjs";
import type { THtmlOnBeforeUnloadEventHandler } from "@/specs/html/types/THtmlOnBeforeUnloadEventHandler.mjs";
import { CSvg2SVGZoomAndPanZoomAndPanType } from "@/specs/svg2/constants/CSvg2SVGZoomAndPanZoomAndPanType.mjs";
import type { ISvg2SVGElement } from "@/specs/svg2/interfaces/ISvg2SVGElement.mjs";
import type { ISvg2SVGSVGElement } from "@/specs/svg2/interfaces/ISvg2SVGSVGElement.mjs";
import * as A from "fp-ts/Array";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "../dom/DomElement.mjs";
import { DomEvent } from "../dom/DomEvent.mjs";
import { DomNode } from "../dom/DomNode.mjs";
import { GeometryDOMMatrix } from "../geometry/GeometryDOMMatrix.mjs";
import { GeometryDOMPoint } from "../geometry/GeometryDOMPoint.mjs";
import { GeometryDOMPointReadOnly } from "../geometry/GeometryDOMPointReadOnly.mjs";
import { GeometryDOMRect } from "../geometry/GeometryDOMRect.mjs";
import { Svg2SVGAngle } from "./Svg2SVGAngle.mjs";
import { Svg2SVGAnimatedLength } from "./Svg2SVGAnimatedLength.mjs";
import { Svg2SVGAnimatedPreserveAspectRatio } from "./Svg2SVGAnimatedPreserveAspectRatio.mjs";
import { Svg2SVGAnimatedRect } from "./Svg2SVGAnimatedRect.mjs";
import { Svg2SVGGraphicsElementBase } from "./Svg2SVGGraphicsElementBase.mjs";
import { Svg2SVGLength } from "./Svg2SVGLength.mjs";
import { Svg2SVGNumber } from "./Svg2SVGNumber.mjs";
import { Svg2SVGTransform } from "./Svg2SVGTransform.mjs";

export class Svg2SVGSVGElement
  extends Svg2SVGGraphicsElementBase<SVGSVGElement>
  implements ISvg2SVGSVGElement<SVGSVGElement>
{
  get x(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.x);
  }
  get y(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.y);
  }
  get width(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.width);
  }
  get height(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.height);
  }

  get currentScale(): number {
    return this.native.currentScale;
  }
  set currentScale(currentScale) {
    this.native.currentScale = currentScale;
  }
  get currentTranslate(): GeometryDOMPointReadOnly {
    return new GeometryDOMPointReadOnly(this.native.currentTranslate);
  }

  getIntersectionList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): DomNode[] {
    return pipe(
      tuple(getNative(rect), getNativeOrNull(referenceElement)),
      tupled(this.native.getIntersectionList),
      (nodeList) => Array.from(nodeList),
      A.map((node) => new DomNode(node))
    );
  }
  getEnclosureList(
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>,
    referenceElement: SVGElement | ISvg2SVGElement<SVGElement> | null
  ): DomNode[] {
    return pipe(
      tuple(getNative(rect), getNativeOrNull(referenceElement)),
      tupled(this.native.getEnclosureList),
      (nodeList) => Array.from(nodeList),
      A.map((node) => new DomNode(node))
    );
  }
  checkIntersection(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>
  ): boolean {
    return pipe(
      tuple(getNative(element), getNative(rect)),
      tupled(this.native.checkIntersection)
    );
  }
  checkEnclosure(
    element: SVGElement | ISvg2SVGElement<SVGElement>,
    rect: DOMRectReadOnly | IGeometryDOMRectReadOnly<DOMRectReadOnly>
  ): boolean {
    return pipe(
      tuple(getNative(element), getNative(rect)),
      tupled(this.native.checkEnclosure)
    );
  }

  deselectAll(): void {
    this.native.deselectAll();
  }

  createSVGNumber(): Svg2SVGNumber {
    return pipe(
      this.native.createSVGNumber(),
      (number) => new Svg2SVGNumber(number)
    );
  }
  createSVGLength(): Svg2SVGLength {
    return pipe(
      this.native.createSVGLength(),
      (length) => new Svg2SVGLength(length)
    );
  }
  createSVGAngle(): Svg2SVGAngle {
    return pipe(
      this.native.createSVGAngle(),
      (angle) => new Svg2SVGAngle(angle)
    );
  }
  createSVGPoint(): GeometryDOMPoint {
    return pipe(
      this.native.createSVGPoint(),
      (point) => new GeometryDOMPoint(point)
    );
  }
  createSVGMatrix(): GeometryDOMMatrix {
    return pipe(
      this.native.createSVGMatrix(),
      (matrix) => new GeometryDOMMatrix(matrix)
    );
  }
  createSVGRect(): GeometryDOMRect {
    return pipe(
      this.native.createSVGRect(),
      (rect) => new GeometryDOMRect(rect)
    );
  }
  createSVGTransform(): Svg2SVGTransform {
    return pipe(
      this.native.createSVGTransform(),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  createSVGTransformFromMatrix(
    matrix: DOMMatrixReadOnly | IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(matrix)),
      tupled(this.native.createSVGTransformFromMatrix),
      (transform) => new Svg2SVGTransform(transform)
    );
  }

  getElementById(elementId: string): DomElement {
    return pipe(
      this.native.getElementById(elementId),
      (element) => new DomElement(element)
    );
  }

  get viewBox(): Svg2SVGAnimatedRect {
    return new Svg2SVGAnimatedRect(this.native.viewBox);
  }
  get preserveAspectRatio(): Svg2SVGAnimatedPreserveAspectRatio {
    return new Svg2SVGAnimatedPreserveAspectRatio(
      this.native.preserveAspectRatio
    );
  }

  static readonly SVG_ZOOMANDPAN_UNKNOWN =
    CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_UNKNOWN;
  static readonly SVG_ZOOMANDPAN_DISABLE =
    CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_DISABLE;
  static readonly SVG_ZOOMANDPAN_MAGNIFY =
    CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_MAGNIFY;
  get zoomAndPan(): CSvg2SVGZoomAndPanZoomAndPanType {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- zoomAndPan is missing in the TypeScript types. */
    return (this.native as SVGSVGElement & { zoomAndPan: number }).zoomAndPan;
  }

  get onafterprint(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onafterprint as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onafterprint(onafterprint) {
    this.native.onafterprint = pipe(
      onafterprint,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeprint(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onbeforeprint as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforeprint(onbeforeprint) {
    this.native.onbeforeprint = pipe(
      onbeforeprint,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeunload(): THtmlOnBeforeUnloadEventHandler {
    return pipe(
      this.native.onbeforeunload,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          pipe(
            callback.bind(this.getNative(), event.getNative())(),
            O.fromNullable
          )
      ),
      O.toNullable
    );
  }
  set onbeforeunload(onbeforeunload) {
    this.native.onbeforeunload = pipe(
      onbeforeunload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onhashchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onhashchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onhashchange(onhashchange) {
    this.native.onhashchange = pipe(
      onhashchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onlanguagechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onlanguagechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onlanguagechange(onlanguagechange) {
    this.native.onlanguagechange = pipe(
      onlanguagechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmessage(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmessage as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmessage(onmessage) {
    this.native.onmessage = pipe(
      onmessage,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmessageerror(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmessageerror as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmessageerror(onmessageerror) {
    this.native.onmessageerror = pipe(
      onmessageerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onoffline(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onoffline as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onoffline(onoffline) {
    this.native.onoffline = pipe(
      onoffline,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ononline(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ononline as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ononline(ononline) {
    this.native.ononline = pipe(
      ononline,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpagehide(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpagehide as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpagehide(onpagehide) {
    this.native.onpagehide = pipe(
      onpagehide,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpageshow(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpageshow as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpageshow(onpageshow) {
    this.native.onpageshow = pipe(
      onpageshow,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpopstate(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpopstate as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpopstate(onpopstate) {
    this.native.onpopstate = pipe(
      onpopstate,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onrejectionhandled(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onrejectionhandled as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onrejectionhandled(onrejectionhandled) {
    this.native.onrejectionhandled = pipe(
      onrejectionhandled,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onstorage(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onstorage as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onstorage(onstorage) {
    this.native.onstorage = pipe(
      onstorage,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onunhandledrejection(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onunhandledrejection as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onunhandledrejection(onunhandledrejection) {
    this.native.onunhandledrejection = pipe(
      onunhandledrejection,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onunload(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onunload as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onunload(onunload) {
    this.native.onunload = pipe(
      onunload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
}
