import { IGeometry1DOMMatrixReadOnly } from "./IGeometry1DOMMatrixReadOnly.js";

export interface IGeometry1DOMMatrix<N extends DOMMatrix>
  extends IGeometry1DOMMatrixReadOnly<N> {
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
