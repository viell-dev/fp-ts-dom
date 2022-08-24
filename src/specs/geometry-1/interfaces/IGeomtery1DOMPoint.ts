import { IGeomtery1DOMPointReadOnly } from "./IGeomtery1DOMPointReadOnly.js";

export interface IGeomtery1DOMPoint<N extends DOMPoint>
  extends IGeomtery1DOMPointReadOnly<N> {
  w: number;
  x: number;
  y: number;
  z: number;
}
