import type { DHtmlImageDataSettings } from "../dictionaries/DHtmlImageDataSettings.mjs";
import type { IHtmlImageData } from "../interfaces/IHtmlImageData.mjs";

export interface MHtmlCanvasImageData {
  // pixel manipulation
  createImageData(
    sw: number,
    sh: number,
    settings?: DHtmlImageDataSettings
  ): IHtmlImageData<ImageData>;
  createImageData(
    imagedata: IHtmlImageData<ImageData>
  ): IHtmlImageData<ImageData>;
  getImageData(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    settings?: DHtmlImageDataSettings
  ): IHtmlImageData<ImageData>;
  putImageData(
    imagedata: IHtmlImageData<ImageData>,
    dx: number,
    dy: number
  ): void;
  putImageData(
    imagedata: IHtmlImageData<ImageData>,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number
  ): void;
}
