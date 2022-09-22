import type { EHtmlCanvasFillRule } from "../enums/EHtmlCanvasFillRule.mjs";
import type { IHtmlPath2D } from "../interfaces/IHtmlPath2D.mjs";

export interface MHtmlCanvasDrawPath {
  // path API (see also MHtmlCanvasPath)
  beginPath(): void;
  fill(fillRule?: EHtmlCanvasFillRule): void;
  fill(path: IHtmlPath2D<Path2D>, fillRule?: EHtmlCanvasFillRule): void;
  stroke(): void;
  stroke(path: IHtmlPath2D<Path2D>): void;
  clip(fillRule?: EHtmlCanvasFillRule): void;
  clip(path: IHtmlPath2D<Path2D>, fillRule?: EHtmlCanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: EHtmlCanvasFillRule): boolean;
  isPointInPath(
    path: IHtmlPath2D<Path2D>,
    x: number,
    y: number,
    fillRule?: EHtmlCanvasFillRule
  ): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: IHtmlPath2D<Path2D>, x: number, y: number): boolean;
}
