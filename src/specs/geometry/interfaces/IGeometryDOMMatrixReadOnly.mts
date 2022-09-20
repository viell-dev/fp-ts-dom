import type {
  InvalidStateErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { ISerializable } from "@/globals/ISerializable.mjs";
import type { IStringifier } from "@/globals/IStringifier.mjs";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type { DGeometryDOMMatrixInit } from "../dictionaries/DGeometryDOMMatrixInit.mjs";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.mjs";
import type { IGeometryDOMMatrix } from "./IGeometryDOMMatrix.mjs";
import type { IGeometryDOMPoint } from "./IGeometryDOMPoint.mjs";
export interface IGeometryDOMMatrixReadOnlyConstructors
  extends IWrapperConstructors<DOMMatrixReadOnly> {
  /**
   * Use {@link create} instead to get an `E.Either`.
   *
   * @throws "SyntaxError" DOMException
   * @throws TypeError
   */
  new (init: string | number[]): IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>;

  create(
    domMatrix: DOMMatrix
  ): E.Right<IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>>;
  create(
    init: string | number[]
  ): E.Either<
    SyntaxErrorDomException | TypeError,
    IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  >;

  fromMatrix(
    other?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>>;
  fromFloat32Array(
    array32: Float32Array
  ): E.Either<TypeError, IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>>;
  fromFloat64Array(
    array64: Float64Array
  ): E.Either<TypeError, IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>>;
}

export interface IGeometryDOMMatrixReadOnly<N extends DOMMatrixReadOnly>
  extends IWrapper<N>,
    IStringifier<`matrix${string}`, InvalidStateErrorDomException>,
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
  ): IGeometryDOMMatrix<DOMMatrix>;
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometryDOMMatrix<DOMMatrix>;
  /**
   * @deprecated Use {@link scale | scale(scaleX, scaleY, 1, 0, 0, 0)} instead.
   */
  scaleNonUniform(
    scaleX?: number,
    scaleY?: number
  ): IGeometryDOMMatrix<DOMMatrix>;
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): IGeometryDOMMatrix<DOMMatrix>;
  rotate(
    rotX?: number,
    rotY?: number,
    rotZ?: number
  ): IGeometryDOMMatrix<DOMMatrix>;
  rotateFromVector(x?: number, y?: number): IGeometryDOMMatrix<DOMMatrix>;
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): IGeometryDOMMatrix<DOMMatrix>;
  skewX(sx?: number): IGeometryDOMMatrix<DOMMatrix>;
  skewY(sy?: number): IGeometryDOMMatrix<DOMMatrix>;
  multiply(other?: DGeometryDOMMatrixInit): IGeometryDOMMatrix<DOMMatrix>;
  flipX(): IGeometryDOMMatrix<DOMMatrix>;
  flipY(): IGeometryDOMMatrix<DOMMatrix>;
  inverse(): IGeometryDOMMatrix<DOMMatrix>;

  transformPoint(point?: DGeometryDOMPointInit): IGeometryDOMPoint<DOMPoint>;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
}
