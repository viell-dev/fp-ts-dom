import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DGeometryDOMRectInit } from "../dictionaries/DGeometryDOMRectInit.js";
import type { IGeometryDOMRectReadOnly } from "./IGeometryDOMRectReadOnly.js";

export interface IGeometryDOMRectConstructors
  extends IWrapperConstructors<DOMRect> {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ): IGeometryDOMRect<DOMRect>;

  fromRect(other?: DGeometryDOMRectInit): IGeometryDOMRect<DOMRect>;
}

export interface IGeometryDOMRect<N extends DOMRect>
  extends IGeometryDOMRectReadOnly<N> {
  x: number;
  y: number;
  width: number;
  height: number;
}
