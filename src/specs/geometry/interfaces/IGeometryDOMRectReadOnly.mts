import type { ISerializable } from "@/globals/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DGeometryDOMRectInit } from "../dictionaries/DGeometryDOMRectInit.js";

export interface IGeometryDOMRectReadOnlyConstructors
  extends IWrapperConstructors<DOMRectReadOnly> {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ): IGeometryDOMRectReadOnly<DOMRectReadOnly>;

  fromRect(
    other?: DGeometryDOMRectInit
  ): IGeometryDOMRectReadOnly<DOMRectReadOnly>;
}

export interface IGeometryDOMRectReadOnly<N extends DOMRectReadOnly>
  extends IWrapper<N>,
    ISerializable {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}
