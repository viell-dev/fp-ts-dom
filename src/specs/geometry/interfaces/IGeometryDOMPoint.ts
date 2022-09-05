import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { IGeometry1DOMPointReadOnly } from "./IGeometry1DOMPointReadOnly.js";

export interface IGeometry1DOMPointConstructors
  extends IWrapperConstructors<DOMPoint> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeometry1DOMPoint<DOMPoint>;

  fromPoint(other?: DGeometry1DOMPointInit): IGeometry1DOMPoint<DOMPoint>;
}

export interface IGeometry1DOMPoint<N extends DOMPoint>
  extends IGeometry1DOMPointReadOnly<N> {
  x: number;
  y: number;
  z: number;
  w: number;
}
