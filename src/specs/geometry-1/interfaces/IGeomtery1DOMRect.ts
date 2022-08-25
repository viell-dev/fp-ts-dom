import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMRectInit } from "../dictionaries/DGeometry1DOMRectInit.js";
import type { IGeomtery1DOMRectReadOnly } from "./IGeomtery1DOMRectReadOnly.js";

export interface IGeomtery1DOMRectConstructors
  extends IWrapperConstructors<DOMRect> {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ): IGeomtery1DOMRect<DOMRect>;

  fromRect(other?: DGeometry1DOMRectInit): IGeomtery1DOMRect<DOMRect>;
}

export interface IGeomtery1DOMRect<N extends DOMRectReadOnly>
  extends IGeomtery1DOMRectReadOnly<N> {
  x: number;
  y: number;
  width: number;
  height: number;
}
