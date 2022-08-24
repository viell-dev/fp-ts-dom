import { IGeometry1DOMRectReadOnly } from "./IGeometry1DOMRectReadOnly.js";

export interface IGeometry1DOMRect<N extends DOMRect>
  extends IGeometry1DOMRectReadOnly<N> {
  x: number;
  y: number;
  width: number;
  height: number;
}
