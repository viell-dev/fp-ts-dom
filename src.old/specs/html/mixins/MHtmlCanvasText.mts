import type { IHtmlTextMetrics } from "../interfaces/IHtmlTextMetrics.mjs";

export interface MHtmlCanvasText {
  /* text (see also the MHtmlCanvasPathDrawingStyles and
      MHtmlCanvasTextDrawingStyles interfaces) */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): IHtmlTextMetrics<TextMetrics>;
}
