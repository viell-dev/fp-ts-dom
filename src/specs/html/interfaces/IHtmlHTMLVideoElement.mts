import type { IHtmlHTMLElementConstructorsBase } from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLMediaElement } from "./IHtmlHTMLMediaElement.mjs";

export type IHtmlHTMLVideoElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLVideoElement>;

export interface IHtmlHTMLVideoElement
  extends IHtmlHTMLMediaElement<HTMLVideoElement> {
  width: number;
  height: number;
  readonly videoWidth: number;
  readonly videoHeight: number;
  poster: string;
  playsInline: boolean;
}
