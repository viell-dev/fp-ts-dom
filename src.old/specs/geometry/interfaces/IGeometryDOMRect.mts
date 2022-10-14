import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { DGeometryDOMRectInit } from "../dictionaries/DGeometryDOMRectInit.mjs";
import type { IGeometryDOMRectReadOnly } from "./IGeometryDOMRectReadOnly.mjs";

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
