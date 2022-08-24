import { IWrapper } from "@/wrapper/IWrapper.js";
import { DGeometry1DOMMatrixInit } from "../dictionaries/DGeometry1DOMMatrixInit.js";
import { IGeomtery1DOMPoint } from "./IGeomtery1DOMPoint.js";

export interface IGeomtery1DOMPointReadOnly<N extends DOMPointReadOnly>
  extends IWrapper<N> {
  readonly w: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;

  matrixTransform(
    matrix?: DGeometry1DOMMatrixInit
  ): IGeomtery1DOMPoint<DOMPoint>;

  toJSON(): unknown;
}
