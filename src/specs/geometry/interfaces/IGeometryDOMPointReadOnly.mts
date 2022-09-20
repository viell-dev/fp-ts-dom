import type { ISerializable } from "@/globals/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { DGeometryDOMMatrixInit } from "../dictionaries/DGeometryDOMMatrixInit.js";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.js";
import type { IGeometryDOMPoint } from "./IGeometryDOMPoint.js";

export interface IGeometryDOMPointReadOnlyConstructors
  extends IWrapperConstructors<DOMPointReadOnly> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeometryDOMPointReadOnly<DOMPointReadOnly>;

  fromPoint(
    other?: DGeometryDOMPointInit
  ): IGeometryDOMPointReadOnly<DOMPointReadOnly>;
}

export interface IGeometryDOMPointReadOnly<N extends DOMPointReadOnly>
  extends IWrapper<N>,
    ISerializable {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly w: number;

  matrixTransform(
    matrix?: DGeometryDOMMatrixInit
  ): E.Either<TypeError, IGeometryDOMPoint<DOMPoint>>;
}
