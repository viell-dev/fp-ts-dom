import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMMatrixInit } from "../dictionaries/DGeometry1DOMMatrixInit.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { IGeometry1DOMMatrix } from "./IGeometry1DOMMatrix.js";
import type { IGeomtery1DOMPoint } from "./IGeomtery1DOMPoint.js";

export interface IGeometry1DOMMatrixReadOnlyConstructors
  extends IWrapperConstructors<DOMMatrixReadOnly> {
  new (init: string | number[]): IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>;

  fromMatrix(
    other?: DGeometry1DOMMatrixInit
  ): IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>;
  fromFloat32Array(
    array32: Float32Array
  ): IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>;
  fromFloat64Array(
    array64: Float64Array
  ): IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>;
}

export interface IGeometry1DOMMatrixReadOnly<N extends DOMMatrixReadOnly>
  extends IWrapper<N>,
    ISerializable {
  // These attributes are simple aliases for certain elements of the 4x4 matrix
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
  readonly e: number;
  readonly f: number;

  readonly m11: number;
  readonly m12: number;
  readonly m13: number;
  readonly m14: number;
  readonly m21: number;
  readonly m22: number;
  readonly m23: number;
  readonly m24: number;
  readonly m31: number;
  readonly m32: number;
  readonly m33: number;
  readonly m34: number;
  readonly m41: number;
  readonly m42: number;
  readonly m43: number;
  readonly m44: number;

  readonly is2D: boolean;
  readonly isIdentity: boolean;

  translate(
    tx?: number,
    ty?: number,
    tz?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  /** @deprecated Use {@link scale} instead. */
  scaleNonUniform(
    scaleX?: number,
    scaleY?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  rotate(
    rotX?: number,
    rotY?: number,
    rotZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  rotateFromVector(x?: number, y?: number): IGeometry1DOMMatrix<DOMMatrix>;
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  skewX(sx?: number): IGeometry1DOMMatrix<DOMMatrix>;
  skewY(sy?: number): IGeometry1DOMMatrix<DOMMatrix>;
  multiply(other?: DGeometry1DOMMatrixInit): IGeometry1DOMMatrix<DOMMatrix>;
  flipX(): IGeometry1DOMMatrix<DOMMatrix>;
  flipY(): IGeometry1DOMMatrix<DOMMatrix>;
  inverse(): IGeometry1DOMMatrix<DOMMatrix>;

  transformPoint(point?: DGeometry1DOMPointInit): IGeomtery1DOMPoint<DOMPoint>;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
}
