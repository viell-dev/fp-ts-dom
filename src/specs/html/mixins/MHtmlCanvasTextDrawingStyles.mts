import type { EHtmlCanvasDirection } from "../enums/EHtmlCanvasDirection.mjs";
import type { EHtmlCanvasFontKerning } from "../enums/EHtmlCanvasFontKerning.mjs";
import type { EHtmlCanvasFontStretch } from "../enums/EHtmlCanvasFontStretch.mjs";
import type { EHtmlCanvasFontVariantCaps } from "../enums/EHtmlCanvasFontVariantCaps.mjs";
import type { EHtmlCanvasTextAlign } from "../enums/EHtmlCanvasTextAlign.mjs";
import type { EHtmlCanvasTextBaseline } from "../enums/EHtmlCanvasTextBaseline.mjs";
import type { EHtmlCanvasTextRendering } from "../enums/EHtmlCanvasTextRendering.mjs";

export interface MHtmlCanvasTextDrawingStyles {
  // text
  font: string;
  textAlign: EHtmlCanvasTextAlign;
  textBaseline: EHtmlCanvasTextBaseline;
  direction: EHtmlCanvasDirection;
  letterSpacing: string;
  fontKerning: EHtmlCanvasFontKerning;
  fontStretch: EHtmlCanvasFontStretch;
  fontVariantCaps: EHtmlCanvasFontVariantCaps;
  textRendering: EHtmlCanvasTextRendering;
  wordSpacing: string;
}
