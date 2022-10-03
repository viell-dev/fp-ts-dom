import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type { DGeometryDOMPointInit } from "../../specs/geometry/dictionaries/DGeometryDOMPointInit.mjs";
import type {
  IGeometryDOMPoint,
  IGeometryDOMPointConstructors,
} from "../../specs/geometry/interfaces/IGeometryDOMPoint.mjs";
import { GeometryDOMPointBase } from "./GeometryDOMPointBase.mjs";

@StaticImplements<IGeometryDOMPointConstructors>()
export class GeometryDOMPoint
  extends GeometryDOMPointBase<DOMPoint>
  implements IGeometryDOMPoint<DOMPoint>
{
  constructor(domPoint: DOMPoint);
  constructor(x?: number, y?: number, z?: number, w?: number);
  constructor(
    domPointOrX?: DOMPoint | number,
    y?: number,
    z?: number,
    w?: number
  ) {
    const nativeDomPoint =
      domPointOrX instanceof DOMPoint
        ? domPointOrX
        : new DOMPoint(domPointOrX, y, z, w);

    super(nativeDomPoint);
  }

  static fromPoint(other?: DGeometryDOMPointInit): GeometryDOMPoint {
    return new GeometryDOMPoint(DOMPoint.fromPoint(other));
  }

  override set x(x: number) {
    this.native.x = x;
  }
  override set y(y: number) {
    this.native.y = y;
  }
  override set z(z: number) {
    this.native.z = z;
  }
  override set w(w: number) {
    this.native.w = w;
  }
}
