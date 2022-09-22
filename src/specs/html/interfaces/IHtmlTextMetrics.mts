import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlTextMetrics<N extends TextMetrics> extends IWrapper<N> {
  // x-direction
  readonly width: number; // advance width
  readonly actualBoundingBoxLeft: number;
  readonly actualBoundingBoxRight: number;

  // y-direction
  readonly fontBoundingBoxAscent: number;
  readonly fontBoundingBoxDescent: number;
  readonly actualBoundingBoxAscent: number;
  readonly actualBoundingBoxDescent: number;
  readonly emHeightAscent: number;
  readonly emHeightDescent: number;
  readonly hangingBaseline: number;
  readonly alphabeticBaseline: number;
  readonly ideographicBaseline: number;
}
