import { IWrapper } from "@/wrapper/IWrapper.js";

export interface IGeometry1DOMRectReadOnly<N extends DOMRectReadOnly>
  extends IWrapper<N> {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;

  toJSON(): unknown;
}
