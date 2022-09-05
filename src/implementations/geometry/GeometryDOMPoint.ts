import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { DGeometry1DOMPointInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMPointInit.js";
import type {
  IGeometry1DOMPoint,
  IGeometry1DOMPointConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMPoint.js";
import { Geometry1DOMPointBase } from "./Geometry1DOMPointBase.js";

@StaticImplements<IGeometry1DOMPointConstructors>()
export class Geometry1DOMPoint
  extends Geometry1DOMPointBase<DOMPoint>
  implements IGeometry1DOMPoint<DOMPoint>
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

  static fromPoint(other?: DGeometry1DOMPointInit): Geometry1DOMPoint {
    return new Geometry1DOMPoint(DOMPoint.fromPoint(other));
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
