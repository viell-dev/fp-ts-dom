import type { EHtmlCanvasLineCap } from "../enums/EHtmlCanvasLineCap.mjs";
import type { EHtmlCanvasLineJoin } from "../enums/EHtmlCanvasLineJoin.mjs";

export interface MHtmlCanvasPathDrawingStyles {
  // line caps/joins
  lineWidth: number;
  lineCap: EHtmlCanvasLineCap;
  lineJoin: EHtmlCanvasLineJoin;
  miterLimit: number;

  // dashed lines
  setLineDash(segments: number[]): void;
  getLineDash(): number[];
  lineDashOffset: number;
}
