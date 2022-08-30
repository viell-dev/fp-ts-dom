import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { DGeometry1DOMMatrixInit } from "../dictionaries/DGeometry1DOMMatrixInit.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { IGeometry1DOMPoint } from "./IGeometry1DOMPoint.js";

export interface IGeometry1DOMPointReadOnlyConstructors
  extends IWrapperConstructors<DOMPointReadOnly> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeometry1DOMPointReadOnly<DOMPointReadOnly>;

  fromPoint(
    other?: DGeometry1DOMPointInit
  ): IGeometry1DOMPointReadOnly<DOMPointReadOnly>;
}

export interface IGeometry1DOMPointReadOnly<N extends DOMPointReadOnly>
  extends IWrapper<N>,
    ISerializable {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly w: number;

  matrixTransform(
    matrix?: DGeometry1DOMMatrixInit
  ): E.Either<TypeError, IGeometry1DOMPoint<DOMPoint>>;
}
