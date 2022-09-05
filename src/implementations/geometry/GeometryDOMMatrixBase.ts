import type { InvalidStateErrorDomException } from "@/exceptions/DomException.js";
import { Wrapper } from "@/global/Wrapper.js";
import type { DGeometry1DOMMatrixInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMMatrixInit.js";
import type { DGeometry1DOMPointInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMPointInit.js";
import type { IGeometry1DOMMatrixReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrixReadOnly.js";
import * as E from "fp-ts/Either";
import { Geometry1DOMMatrix } from "./Geometry1DOMMatrix.js";
import { Geometry1DOMPoint } from "./Geometry1DOMPoint.js";

export abstract class Geometry1DOMMatrixBase<N extends DOMMatrixReadOnly>
  extends Wrapper<N>
  implements IGeometry1DOMMatrixReadOnly<N>
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

  translate(tx?: number, ty?: number, tz?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.translate(tx, ty, tz)).right;
  }
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(
      this.native.scale(scaleX, scaleY, scaleZ, originX, originY, originZ)
    ).right;
  }
  /**
   * @deprecated Use {@link scale | scale(scaleX, scaleY, 1, 0, 0, 0)} instead.
   */
  scaleNonUniform(scaleX?: number, scaleY?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(
      this.native.scaleNonUniform(scaleX, scaleY)
    ).right;
  }
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(
      this.native.scale3d(scale, originX, originY, originZ)
    ).right;
  }
  rotate(rotX?: number, rotY?: number, rotZ?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.rotate(rotX, rotY, rotZ))
      .right;
  }
  rotateFromVector(x?: number, y?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.rotateFromVector(x, y)).right;
  }
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(
      this.native.rotateAxisAngle(x, y, z, angle)
    ).right;
  }
  skewX(sx?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.skewX(sx)).right;
  }
  skewY(sy?: number): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.skewY(sy)).right;
  }
  multiply(other?: DGeometry1DOMMatrixInit): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.multiply(other)).right;
  }
  flipX(): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.flipX()).right;
  }
  flipY(): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.flipY()).right;
  }
  inverse(): Geometry1DOMMatrix {
    return Geometry1DOMMatrix.create(this.native.inverse()).right;
  }

  transformPoint(point?: DGeometry1DOMPointInit): Geometry1DOMPoint {
    return new Geometry1DOMPoint(this.native.transformPoint(point));
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
