import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMMatrixInit } from "../dictionaries/DGeometry1DOMMatrixInit.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { IGeomtery1DOMPoint } from "./IGeomtery1DOMPoint.js";

export interface IGeomtery1DOMPointReadOnlyConstructors
  extends IWrapperConstructors<DOMPointReadOnly> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeomtery1DOMPointReadOnly<DOMPointReadOnly>;

  fromPoint(
    other?: DGeometry1DOMPointInit
  ): IGeomtery1DOMPointReadOnly<DOMPointReadOnly>;
}

export interface IGeomtery1DOMPointReadOnly<N extends DOMPointReadOnly>
  extends IWrapper<N>,
    ISerializable {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly w: number;

  matrixTransform(
    matrix?: DGeometry1DOMMatrixInit
  ): IGeomtery1DOMPoint<DOMPoint>;
}
