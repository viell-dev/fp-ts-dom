import type { IHtmlImageBitmap } from "../interfaces/IHtmlImageBitmap.mjs";
import type { IHtmlMessagePort } from "../interfaces/IHtmlMessagePort.mjs";
import type {
  IHtmlOffscreenCanvas,
  MissingOffscreenCanvas,
} from "../interfaces/IHtmlOffscreenCanvas.mjs";

export interface DHtmlStructuredSerializeOptions {
  transfer?: (
    | ArrayBuffer
    | MessagePort
    | IHtmlMessagePort<MessagePort>
    | ImageBitmap
    | IHtmlImageBitmap<ImageBitmap>
    | MissingOffscreenCanvas
    | IHtmlOffscreenCanvas<MissingOffscreenCanvas>
  )[];
}
