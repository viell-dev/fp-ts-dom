import type { IHtmlImageData } from "../interfaces/IHtmlImageData.mjs";
import type { THtmlCanvasImageSource } from "./THtmlCanvasImageSource.mjs";

export type THtmlImageBitmapSource =
  | THtmlCanvasImageSource
  | Blob
  | IHtmlImageData<ImageData>;
