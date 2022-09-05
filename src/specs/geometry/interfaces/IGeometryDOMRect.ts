import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMRectInit } from "../dictionaries/DGeometry1DOMRectInit.js";
import type { IGeometry1DOMRectReadOnly } from "./IGeometry1DOMRectReadOnly.js";

export interface IGeometry1DOMRectConstructors
  extends IWrapperConstructors<DOMRect> {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ): IGeometry1DOMRect<DOMRect>;

  fromRect(other?: DGeometry1DOMRectInit): IGeometry1DOMRect<DOMRect>;
}

export interface IGeometry1DOMRect<N extends DOMRect>
  extends IGeometry1DOMRectReadOnly<N> {
  x: number;
  y: number;
  width: number;
  height: number;
}
