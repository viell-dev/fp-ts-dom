import type { THtmlCanvasImageSource } from "../types/THtmlCanvasImageSource.mjs";

export interface MHtmlCanvasDrawImage {
  // drawing images
  drawImage(image: THtmlCanvasImageSource, dx: number, dy: number): void;
  drawImage(
    image: THtmlCanvasImageSource,
    dx: number,
    dy: number,
    dh: number,
    dw: number
  ): void;
  drawImage(
    image: THtmlCanvasImageSource,
    sx: number,
    sy: number,
    sh: number,
    sw: number,
    dx: number,
    dy: number,
    dh: number,
    dw: number
  ): void;
}
