import type * as O from "fp-ts/Option";
import type { IHtmlCanvasGradient } from "../interfaces/IHtmlCanvasGradient.mjs";
import type { IHtmlCanvasPattern } from "../interfaces/IHtmlCanvasPattern.mjs";
import type { THtmlCanvasImageSource } from "../types/THtmlCanvasImageSource.mjs";

export interface MHtmlCanvasFillStrokeStyles {
  // colors and styles (see also the MHtmlCanvasPathDrawingStyles and MHtmlCanvasTextDrawingStyles interfaces)
  strokeStyle:
    | string
    | IHtmlCanvasGradient<CanvasGradient>
    | IHtmlCanvasPattern<CanvasPattern>;
  fillStyle:
    | string
    | IHtmlCanvasGradient<CanvasGradient>
    | IHtmlCanvasPattern<CanvasPattern>;
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): IHtmlCanvasGradient<CanvasGradient>;
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number
  ): IHtmlCanvasGradient<CanvasGradient>;
  createConicGradient(
    startAngle: number,
    x: number,
    y: number
  ): IHtmlCanvasGradient<CanvasGradient>;
  createPattern(
    image: THtmlCanvasImageSource,
    repetition: string
  ): O.Option<IHtmlCanvasPattern<CanvasPattern>>;
}
