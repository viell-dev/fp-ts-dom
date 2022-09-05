import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import type { DGeometryDOMMatrixInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrixInit.js";
import type {
  IGeometryDOMMatrix,
  IGeometryDOMMatrixConstructors,
} from "@/specs/geometry/interfaces/IGeometryDOMMatrix.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { GeometryDOMMatrixBase } from "./GeometryDOMMatrixBase.js";

@StaticImplements<IGeometryDOMMatrixConstructors>()
export class GeometryDOMMatrix
  extends GeometryDOMMatrixBase<DOMMatrix>
  implements IGeometryDOMMatrix<DOMMatrix>
{
  /**
   * Use {@link create} instead to get an `E.Either`.
   *
   * @throws "SyntaxError" DOMException
   * @throws TypeError
   */
  constructor(domMatrix: DOMMatrix);
  constructor(init?: string | number[]);
  constructor(domMatrixOrInit?: DOMMatrix | string | number[]) {
    const maybeNativeDomMatrix = E.tryCatch(
      () =>
        domMatrixOrInit instanceof DOMMatrix
          ? domMatrixOrInit
          : new DOMMatrix(domMatrixOrInit),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec lists `"SyntaxError" DOMException` and `TypeError` as
          possible exceptions. */
      (error) => error as SyntaxErrorDomException | TypeError
    );

    if (E.isLeft(maybeNativeDomMatrix)) {
      throw maybeNativeDomMatrix.left;
    }

    super(maybeNativeDomMatrix.right);
  }

  static create(domMatrix: DOMMatrix): E.Right<GeometryDOMMatrix>;
  static create(
    init?: string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, GeometryDOMMatrix>;
  static create(
    domMatrixOrInit?: DOMMatrix | string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, GeometryDOMMatrix> {
    return pipe(
      E.tryCatch(
        () =>
          domMatrixOrInit instanceof DOMMatrix
            ? domMatrixOrInit
            : new DOMMatrix(domMatrixOrInit),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec lists `"SyntaxError" DOMException` and `TypeError` as
            possible exceptions. */
        (error) => error as SyntaxErrorDomException | TypeError
      ),
      E.map((nativeDomMatrix) => new this(nativeDomMatrix))
    );
  }

  static fromMatrix(
    other?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, GeometryDOMMatrix> {
    return pipe(
      E.tryCatch(
        () => DOMMatrix.fromMatrix(other),
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) => GeometryDOMMatrix.create(nativeDomMatrix)),
      E.flatten
    );
  }
  static fromFloat32Array(
    array32: Float32Array
  ): E.Either<TypeError, GeometryDOMMatrix> {
    return pipe(
      E.tryCatch(
        () => DOMMatrix.fromFloat32Array(array32),
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) => GeometryDOMMatrix.create(nativeDomMatrix)),
      E.flatten
    );
  }
  static fromFloat64Array(
    array64: Float64Array
  ): E.Either<TypeError, GeometryDOMMatrix> {
    return pipe(
      E.tryCatch(
        () => DOMMatrix.fromFloat64Array(array64),
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) => GeometryDOMMatrix.create(nativeDomMatrix)),
      E.flatten
    );
  }

  override set a(a: number) {
    this.native.a = a;
  }
  override set b(b: number) {
    this.native.b = b;
  }
  override set c(c: number) {
    this.native.c = c;
  }
  override set d(d: number) {
    this.native.d = d;
  }
  override set e(e: number) {
    this.native.e = e;
  }
  override set f(f: number) {
    this.native.f = f;
  }

  override set m11(m11: number) {
    this.native.m11 = m11;
  }
  override set m12(m12: number) {
    this.native.m12 = m12;
  }
  override set m13(m13: number) {
    this.native.m13 = m13;
  }
  override set m14(m14: number) {
    this.native.m14 = m14;
  }
  override set m21(m21: number) {
    this.native.m21 = m21;
  }
  override set m22(m22: number) {
    this.native.m22 = m22;
  }
  override set m23(m23: number) {
    this.native.m23 = m23;
  }
  override set m24(m24: number) {
    this.native.m24 = m24;
  }
  override set m31(m31: number) {
    this.native.m31 = m31;
  }
  override set m32(m32: number) {
    this.native.m32 = m32;
  }
  override set m33(m33: number) {
    this.native.m33 = m33;
  }
  override set m34(m34: number) {
    this.native.m34 = m34;
  }
  override set m41(m41: number) {
    this.native.m41 = m41;
  }
  override set m42(m42: number) {
    this.native.m42 = m42;
  }
  override set m43(m43: number) {
    this.native.m43 = m43;
  }
  override set m44(m44: number) {
    this.native.m44 = m44;
  }

  multiplySelf(other?: DGeometryDOMMatrixInit): E.Either<TypeError, this> {
    return E.tryCatch(
      () => {
        this.native.multiplySelf(other);
        return this;
      },
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `TypeError` as a possible exception. */
      (error) => error as TypeError
    );
  }
  preMultiplySelf(other?: DGeometryDOMMatrixInit): E.Either<TypeError, this> {
    return E.tryCatch(
      () => {
        this.native.preMultiplySelf(other);
        return this;
      },
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `TypeError` as a possible exception. */
      (error) => error as TypeError
    );
  }
  translateSelf(tx?: number, ty?: number, tz?: number): this {
    this.native.translateSelf(tx, ty, tz);
    return this;
  }
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): this {
    this.native.scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ);
    return this;
  }
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number
  ): this {
    this.native.scale3dSelf(scale, originX, originY, originZ);
    return this;
  }
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): this {
    this.native.rotateSelf(rotX, rotY, rotZ);
    return this;
  }
  rotateFromVectorSelf(x?: number, y?: number): this {
    this.native.rotateFromVectorSelf(x, y);
    return this;
  }
  rotateAxisAngleSelf(
    x?: number,
    y?: number,
    z?: number,
    angle?: number
  ): this {
    this.native.rotateAxisAngleSelf(x, y, z, angle);
    return this;
  }
  skewXSelf(sx?: number): this {
    this.native.skewXSelf(sx);
    return this;
  }
  skewYSelf(sy?: number): this {
    this.native.skewYSelf(sy);
    return this;
  }
  invertSelf(): this {
    this.native.invertSelf();
    return this;
  }

  setMatrixValue(
    transformList: string
  ): E.Either<SyntaxErrorDomException, this> {
    return E.tryCatch(
      () => {
        this.native.setMatrixValue(transformList);
        return this;
      },
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `"SyntaxError" DOMException` as a possible
          exception. */
      (error) => error as SyntaxErrorDomException
    );
  }
}
