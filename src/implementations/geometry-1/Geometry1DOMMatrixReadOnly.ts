import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import type { DGeometry1DOMMatrixInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMMatrixInit.js";
import type {
  IGeometry1DOMMatrixReadOnly,
  IGeometry1DOMMatrixReadOnlyConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrixReadOnly.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { Geometry1DOMMatrixBase } from "./Geometry1DOMMatrixBase.js";

@StaticImplements<IGeometry1DOMMatrixReadOnlyConstructors>()
export class Geometry1DOMMatrixReadOnly
  extends Geometry1DOMMatrixBase<DOMMatrixReadOnly>
  implements IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>
{
  /**
   * Use {@link create} instead to get an `E.Either`.
   *
   * @throws "SyntaxError" DOMException
   * @throws TypeError
   */
  constructor(domMatrixReadOnly: DOMMatrixReadOnly);
  constructor(init?: string | number[]);
  constructor(domMatrixReadOnlyOrInit?: DOMMatrixReadOnly | string | number[]) {
    const maybeNativeDomMatrixReadOnly = E.tryCatch(
      () =>
        domMatrixReadOnlyOrInit instanceof DOMMatrixReadOnly
          ? domMatrixReadOnlyOrInit
          : new DOMMatrixReadOnly(domMatrixReadOnlyOrInit),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec lists `"SyntaxError" DOMException` and `TypeError` as
          possible exceptions. */
      (error) => error as SyntaxErrorDomException | TypeError
    );

    if (E.isLeft(maybeNativeDomMatrixReadOnly)) {
      throw maybeNativeDomMatrixReadOnly.left;
    }

    super(maybeNativeDomMatrixReadOnly.right);
  }

  static create(
    domMatrixReadOnly: DOMMatrixReadOnly
  ): E.Right<Geometry1DOMMatrixReadOnly>;
  static create(
    init?: string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, Geometry1DOMMatrixReadOnly>;
  static create(
    domMatrixReadOnlyOrInit?: DOMMatrixReadOnly | string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, Geometry1DOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () =>
          domMatrixReadOnlyOrInit instanceof DOMMatrixReadOnly
            ? domMatrixReadOnlyOrInit
            : new DOMMatrixReadOnly(domMatrixReadOnlyOrInit),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec lists `"SyntaxError" DOMException` and `TypeError` as
            possible exceptions. */
        (error) => error as SyntaxErrorDomException | TypeError
      ),
      E.map((nativeDomMatrixReadOnly) => new this(nativeDomMatrixReadOnly))
    );
  }

  static fromMatrix(
    other?: DGeometry1DOMMatrixInit
  ): E.Either<TypeError, Geometry1DOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromMatrix(other),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        Geometry1DOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
  static fromFloat32Array(
    array32: Float32Array
  ): E.Either<TypeError, Geometry1DOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromFloat32Array(array32),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        Geometry1DOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
  static fromFloat64Array(
    array64: Float64Array
  ): E.Either<TypeError, Geometry1DOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromFloat64Array(array64),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        Geometry1DOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
}
