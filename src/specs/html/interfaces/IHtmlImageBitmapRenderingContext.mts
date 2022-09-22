import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IHtmlHTMLCanvasElement } from "./IHtmlHTMLCanvasElement.mjs";
import type { IHtmlImageBitmap } from "./IHtmlImageBitmap.mjs";
import type {
  IHtmlOffscreenCanvas,
  MissingOffscreenCanvas,
} from "./IHtmlOffscreenCanvas.mjs";

export interface IHtmlImageBitmapRenderingContext<
  N extends ImageBitmapRenderingContext
> extends IWrapper<N> {
  readonly canvas:
    | IHtmlHTMLCanvasElement<HTMLCanvasElement>
    | IHtmlOffscreenCanvas<MissingOffscreenCanvas>;
  transferFromImageBitmap(bitmap: IHtmlImageBitmap<ImageBitmap> | null): void;
}
