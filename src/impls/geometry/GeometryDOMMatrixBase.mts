import type { InvalidStateErrorDomException } from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { DGeometryDOMMatrixInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrixInit.mjs";
import type { DGeometryDOMPointInit } from "@/specs/geometry/dictionaries/DGeometryDOMPointInit.mjs";
import type { IGeometryDOMMatrixReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";
import * as E from "fp-ts/Either";
import { GeometryDOMMatrix } from "./GeometryDOMMatrix.mjs";
import { GeometryDOMPoint } from "./GeometryDOMPoint.mjs";

export abstract class GeometryDOMMatrixBase<N extends DOMMatrixReadOnly>
  extends Wrapper<N>
  implements IGeometryDOMMatrixReadOnly<N>
{
  get a(): number {
    return this.native.a;
  }
  get b(): number {
    return this.native.b;
  }
  get c(): number {
    return this.native.c;
  }
  get d(): number {
    return this.native.d;
  }
  get e(): number {
    return this.native.e;
  }
  get f(): number {
    return this.native.f;
  }

  get m11(): number {
    return this.native.m11;
  }
  get m12(): number {
    return this.native.m12;
  }
  get m13(): number {
    return this.native.m13;
  }
  get m14(): number {
    return this.native.m14;
  }
  get m21(): number {
    return this.native.m21;
  }
  get m22(): number {
    return this.native.m22;
  }
  get m23(): number {
    return this.native.m23;
  }
  get m24(): number {
    return this.native.m24;
  }
  get m31(): number {
    return this.native.m31;
  }
  get m32(): number {
    return this.native.m32;
  }
  get m33(): number {
    return this.native.m33;
  }
  get m34(): number {
    return this.native.m34;
  }
  get m41(): number {
    return this.native.m41;
  }
  get m42(): number {
    return this.native.m42;
  }
  get m43(): number {
    return this.native.m43;
  }
  get m44(): number {
    return this.native.m44;
  }

  get is2D(): boolean {
    return this.native.is2D;
  }
  get isIdentity(): boolean {
    return this.native.isIdentity;
  }

  translate(tx?: number, ty?: number, tz?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.translate(tx, ty, tz)).right;
  }
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(
      this.native.scale(scaleX, scaleY, scaleZ, originX, originY, originZ)
    ).right;
  }
  /**
   * @deprecated Use {@link scale | scale(scaleX, scaleY, 1, 0, 0, 0)} instead.
   */
  scaleNonUniform(scaleX?: number, scaleY?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.scaleNonUniform(scaleX, scaleY))
      .right;
  }
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(
      this.native.scale3d(scale, originX, originY, originZ)
    ).right;
  }
  rotate(rotX?: number, rotY?: number, rotZ?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.rotate(rotX, rotY, rotZ)).right;
  }
  rotateFromVector(x?: number, y?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.rotateFromVector(x, y)).right;
  }
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.rotateAxisAngle(x, y, z, angle))
      .right;
  }
  skewX(sx?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.skewX(sx)).right;
  }
  skewY(sy?: number): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.skewY(sy)).right;
  }
  multiply(other?: DGeometryDOMMatrixInit): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.multiply(other)).right;
  }
  flipX(): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.flipX()).right;
  }
  flipY(): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.flipY()).right;
  }
  inverse(): GeometryDOMMatrix {
    return GeometryDOMMatrix.create(this.native.inverse()).right;
  }

  transformPoint(point?: DGeometryDOMPointInit): GeometryDOMPoint {
    return new GeometryDOMPoint(this.native.transformPoint(point));
  }
  toFloat32Array(): Float32Array {
    return this.native.toFloat32Array();
  }
  toFloat64Array(): Float64Array {
    return this.native.toFloat64Array();
  }

  override toString(): E.Either<
    InvalidStateErrorDomException,
    `matrix${string}`
  > {
    return E.tryCatch(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec says toString will result in either a `matrix` or `matrix3d`
          CSS3 Transform function. */
      () => this.native.toString() as `matrix${string}`,
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `"InvalidStateError" DOMException` as a possible
          exception. */
      (error) => error as InvalidStateErrorDomException
    );
  }
  toJSON(): {} {
    return this.native.toJSON();
  }
}
