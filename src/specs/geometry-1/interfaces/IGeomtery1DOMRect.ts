import { IGeomtery1DOMRectReadOnly } from "./IGeomtery1DOMRectReadOnly.js";

export interface IGeomtery1DOMRect<N extends DOMRectReadOnly>
  extends IGeomtery1DOMRectReadOnly<N> {
  x: number;
  y: number;
  width: number;
  height: number;
}
