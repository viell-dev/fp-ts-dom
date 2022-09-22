import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlImageBitmap<N extends ImageBitmap> extends IWrapper<N> {
  readonly width: number;
  readonly height: number;
  close(): void;
}
