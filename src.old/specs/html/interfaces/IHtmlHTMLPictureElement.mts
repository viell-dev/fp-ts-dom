import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLPictureElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLPictureElement>;

export type IHtmlHTMLPictureElement<N extends HTMLPictureElement> =
  IHtmlHTMLElement<N>;
