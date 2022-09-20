import type { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { DGeometryDOMMatrixInit } from "../dictionaries/DGeometryDOMMatrixInit.js";
import type { IGeometryDOMMatrixReadOnly } from "./IGeometryDOMMatrixReadOnly.js";

export interface IGeometryDOMMatrixConstructors
  extends IWrapperConstructors<DOMMatrix> {
  /**
   * Use {@link create} instead to get an `E.Either`.
   *
   * @throws "SyntaxError" DOMException
   * @throws TypeError
   */
  new (init: string | number[]): IGeometryDOMMatrix<DOMMatrix>;

  create(domMatrix: DOMMatrix): E.Right<IGeometryDOMMatrix<DOMMatrix>>;
  create(
    init: string | number[]
  ): E.Either<
    SyntaxErrorDomException | TypeError,
    IGeometryDOMMatrix<DOMMatrix>
  >;

  fromMatrix(
    other?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, IGeometryDOMMatrix<DOMMatrix>>;
  fromFloat32Array(
    array32: Float32Array
  ): E.Either<TypeError, IGeometryDOMMatrix<DOMMatrix>>;
  fromFloat64Array(
    array64: Float64Array
  ): E.Either<TypeError, IGeometryDOMMatrix<DOMMatrix>>;
}

export interface IGeometryDOMMatrix<N extends DOMMatrix>
  extends IGeometryDOMMatrixReadOnly<N> {
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

  multiplySelf(other?: DOMMatrixInit): E.Either<TypeError, this>;
  preMultiplySelf(other?: DOMMatrixInit): E.Either<TypeError, this>;
  translateSelf(tx?: number, ty?: number, tz?: number): this;
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): this;
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): this;
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): this;
  rotateFromVectorSelf(x?: number, y?: number): this;
  rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): this;
  skewXSelf(sx?: number): this;
  skewYSelf(sy?: number): this;
  invertSelf(): this;

  setMatrixValue(
    transformList: string
  ): E.Either<SyntaxErrorDomException, this>;
}
