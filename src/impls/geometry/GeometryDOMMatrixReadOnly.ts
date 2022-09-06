import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import type { DGeometryDOMMatrixInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrixInit.js";
import type {
  IGeometryDOMMatrixReadOnly,
  IGeometryDOMMatrixReadOnlyConstructors,
} from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { GeometryDOMMatrixBase } from "./GeometryDOMMatrixBase.js";

@StaticImplements<IGeometryDOMMatrixReadOnlyConstructors>()
export class GeometryDOMMatrixReadOnly
  extends GeometryDOMMatrixBase<DOMMatrixReadOnly>
  implements IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
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
  ): E.Right<GeometryDOMMatrixReadOnly>;
  static create(
    init?: string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, GeometryDOMMatrixReadOnly>;
  static create(
    domMatrixReadOnlyOrInit?: DOMMatrixReadOnly | string | number[]
  ): E.Either<SyntaxErrorDomException | TypeError, GeometryDOMMatrixReadOnly> {
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
    other?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, GeometryDOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromMatrix(other),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        GeometryDOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
  static fromFloat32Array(
    array32: Float32Array
  ): E.Either<TypeError, GeometryDOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromFloat32Array(array32),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        GeometryDOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
  static fromFloat64Array(
    array64: Float64Array
  ): E.Either<TypeError, GeometryDOMMatrixReadOnly> {
    return pipe(
      E.tryCatch(
        () => DOMMatrixReadOnly.fromFloat64Array(array64),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- The spec only lists `TypeError` as possible exception. */
        (error) => error as TypeError
      ),
      E.map((nativeDomMatrix) =>
        GeometryDOMMatrixReadOnly.create(nativeDomMatrix)
      ),
      E.flatten
    );
  }
}