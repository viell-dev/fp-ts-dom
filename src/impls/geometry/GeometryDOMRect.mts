import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type { DGeometryDOMRectInit } from "../../specs/geometry/dictionaries/DGeometryDOMRectInit.mjs";
import type {
  IGeometryDOMRect,
  IGeometryDOMRectConstructors,
} from "../../specs/geometry/interfaces/IGeometryDOMRect.mjs";
import { GeometryDOMRectBase } from "./GeometryDOMRectBase.mjs";

@StaticImplements<IGeometryDOMRectConstructors>()
export class GeometryDOMRect
  extends GeometryDOMRectBase<DOMRect>
  implements IGeometryDOMRect<DOMRect>
{
  constructor(domRect: DOMRect);
  constructor(x?: number, y?: number, width?: number, height?: number);
  constructor(
    domRectOrX?: DOMRect | number,
    y?: number,
    width?: number,
    height?: number
  ) {
    const nativeDomRect =
      domRectOrX instanceof DOMRect
        ? domRectOrX
        : new DOMRect(domRectOrX, y, width, height);

    super(nativeDomRect);
  }

  static fromRect(other: DGeometryDOMRectInit): GeometryDOMRect {
    return new GeometryDOMRect(DOMRect.fromRect(other));
  }

  override set x(x: number) {
    this.native.x = x;
  }
  override set y(y: number) {
    this.native.y = y;
  }
  override set width(width: number) {
    this.native.width = width;
  }
  override set height(height: number) {
    this.native.height = height;
  }
}
