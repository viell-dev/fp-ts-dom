import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.js";
import type { IGeometryDOMPointReadOnly } from "./IGeometryDOMPointReadOnly.js";

export interface IGeometryDOMPointConstructors
  extends IWrapperConstructors<DOMPoint> {
  new (
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): IGeometryDOMPoint<DOMPoint>;

  fromPoint(other?: DGeometryDOMPointInit): IGeometryDOMPoint<DOMPoint>;
}

export interface IGeometryDOMPoint<N extends DOMPoint>
  extends IGeometryDOMPointReadOnly<N> {
  x: number;
  y: number;
  z: number;
  w: number;
}
