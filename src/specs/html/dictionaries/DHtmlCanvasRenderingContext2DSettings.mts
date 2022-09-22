import type { EHtmlPredefinedColorSpace } from "../enums/EHtmlPredefinedColorSpace.mjs";

export interface DHtmlCanvasRenderingContext2DSettings {
  alpha?: boolean;
  desynchronized?: boolean;
  colorSpace?: EHtmlPredefinedColorSpace;
  willReadFrequently?: boolean;
}
