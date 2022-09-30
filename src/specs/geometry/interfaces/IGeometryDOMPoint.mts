import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.mjs";
import type { IGeometryDOMPointReadOnly } from "./IGeometryDOMPointReadOnly.mjs";

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
