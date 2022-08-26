import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { IGeomtery1DOMPointReadOnly } from "./IGeomtery1DOMPointReadOnly.js";

export interface IGeomtery1DOMPointConstructors
  extends IWrapperConstructors<DOMPoint> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeomtery1DOMPoint<DOMPoint>;

  fromPoint(other?: DGeometry1DOMPointInit): IGeomtery1DOMPoint<DOMPoint>;
}

export interface IGeomtery1DOMPoint<N extends DOMPoint>
  extends IGeomtery1DOMPointReadOnly<N> {
  x: number;
  y: number;
  z: number;
  w: number;
}
