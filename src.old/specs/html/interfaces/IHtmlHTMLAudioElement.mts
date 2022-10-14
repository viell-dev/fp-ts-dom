import type { IHtmlHTMLElementConstructorsBase } from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLMediaElement } from "./IHtmlHTMLMediaElement.mjs";

export type IHtmlHTMLAudioElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLAudioElement>;

export type IHtmlHTMLAudioElement<N extends HTMLAudioElement> =
  IHtmlHTMLMediaElement<N>;
