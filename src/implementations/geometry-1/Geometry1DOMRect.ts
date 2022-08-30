import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { DGeometry1DOMRectInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMRectInit.js";
import type {
  IGeometry1DOMRect,
  IGeometry1DOMRectConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMRect.js";
import { Geometry1DOMRectBase } from "./Geometry1DOMRectBase.js";

@StaticImplements<IGeometry1DOMRectConstructors>()
export class Geometry1DOMRect
  extends Geometry1DOMRectBase<DOMRect>
  implements IGeometry1DOMRect<DOMRect>
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

  static fromRect(other: DGeometry1DOMRectInit): Geometry1DOMRect {
    return new Geometry1DOMRect(DOMRect.fromRect(other));
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
