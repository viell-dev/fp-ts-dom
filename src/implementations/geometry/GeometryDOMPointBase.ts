import { Wrapper } from "@/global/Wrapper.js";
import type { DGeometry1DOMMatrixInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMMatrixInit.js";
import type { IGeometry1DOMPointReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMPointReadOnly.js";
import * as E from "fp-ts/Either";
import { Geometry1DOMPoint } from "./Geometry1DOMPoint.js";

export abstract class Geometry1DOMPointBase<N extends DOMPointReadOnly>
  extends Wrapper<N>
  implements IGeometry1DOMPointReadOnly<N>
{
  get x(): number {
    return this.native.x;
  }
  get y(): number {
    return this.native.y;
  }
  get z(): number {
    return this.native.z;
  }
  get w(): number {
    return this.native.w;
  }

  matrixTransform(
    matrix?: DGeometry1DOMMatrixInit
  ): E.Either<TypeError, Geometry1DOMPoint> {
    return E.tryCatch(
      () => new Geometry1DOMPoint(this.native.matrixTransform(matrix)),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `TypeError` as a possible exception. */
      (error) => error as TypeError
    );
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
