import { IWrapper } from "@/wrapper/IWrapper.js";

export interface IGeomtery1DOMRectReadOnly<N extends DOMRectReadOnly>
  extends IWrapper<N> {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;

  toJSON(): unknown;
}
