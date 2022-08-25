import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMMatrixInit } from "../dictionaries/DGeometry1DOMMatrixInit.js";
import type { IGeometry1DOMMatrixReadOnly } from "./IGeometry1DOMMatrixReadOnly.js";

export interface IGeometry1DOMMatrixConstructors
  extends IWrapperConstructors<DOMMatrix> {
  new (init: string | number[]): IGeometry1DOMMatrix<DOMMatrix>;

  fromMatrix(other?: DGeometry1DOMMatrixInit): IGeometry1DOMMatrix<DOMMatrix>;
  fromFloat32Array(array32: Float32Array): IGeometry1DOMMatrix<DOMMatrix>;
  fromFloat64Array(array64: Float64Array): IGeometry1DOMMatrix<DOMMatrix>;
}

export interface IGeometry1DOMMatrix<N extends DOMMatrix>
  extends IGeometry1DOMMatrixReadOnly<N> {
  // These attributes are simple aliases for certain elements of the 4x4 matrix
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;

  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;

  multiplySelf(other?: DOMMatrixInit): IGeometry1DOMMatrix<DOMMatrix>;
  preMultiplySelf(other?: DOMMatrixInit): IGeometry1DOMMatrix<DOMMatrix>;
  translateSelf(
    tx?: number,
    ty?: number,
    tz?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  rotateSelf(
    rotX?: number,
    rotY?: number,
    rotZ?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  rotateFromVectorSelf(x?: number, y?: number): IGeometry1DOMMatrix<DOMMatrix>;
  rotateAxisAngleSelf(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): IGeometry1DOMMatrix<DOMMatrix>;
  skewXSelf(sx?: number): IGeometry1DOMMatrix<DOMMatrix>;
  skewYSelf(sy?: number): IGeometry1DOMMatrix<DOMMatrix>;
  invertSelf(): IGeometry1DOMMatrix<DOMMatrix>;

  setMatrixValue(transformList: string): IGeometry1DOMMatrix<DOMMatrix>;
}
