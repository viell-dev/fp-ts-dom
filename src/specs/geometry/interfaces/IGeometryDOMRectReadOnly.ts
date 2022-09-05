import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMRectInit } from "../dictionaries/DGeometry1DOMRectInit.js";

export interface IGeometry1DOMRectReadOnlyConstructors
  extends IWrapperConstructors<DOMRectReadOnly> {
  new (
    x?: number,
    y?: number,
    width?: number,
    height?: number
  ): IGeometry1DOMRectReadOnly<DOMRectReadOnly>;

  fromRect(
    other?: DGeometry1DOMRectInit
  ): IGeometry1DOMRectReadOnly<DOMRectReadOnly>;
}

export interface IGeometry1DOMRectReadOnly<N extends DOMRectReadOnly>
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
