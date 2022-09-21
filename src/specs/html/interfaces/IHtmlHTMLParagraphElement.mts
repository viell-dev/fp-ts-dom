import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLParagraphElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLParagraphElement>;

export type IHtmlHTMLParagraphElement<N extends HTMLParagraphElement> =
  IHtmlHTMLElement<N>;
