import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlCanvasGradient<N extends CanvasGradient>
  extends IWrapper<N> {
  // opaque object
  addColorStop(offset: number, color: string): void;
}
