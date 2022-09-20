import { Wrapper } from "@/globals/Wrapper.js";
import type { DGeometryDOMMatrixInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrixInit.js";
import type { IGeometryDOMPointReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMPointReadOnly.js";
import * as E from "fp-ts/Either";
import { GeometryDOMPoint } from "./GeometryDOMPoint.js";

export abstract class GeometryDOMPointBase<N extends DOMPointReadOnly>
  extends Wrapper<N>
  implements IGeometryDOMPointReadOnly<N>
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
    matrix?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, GeometryDOMPoint> {
    return E.tryCatch(
      () => new GeometryDOMPoint(this.native.matrixTransform(matrix)),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- The spec only lists `TypeError` as a possible exception. */
      (error) => error as TypeError
    );
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
