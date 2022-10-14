import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLSpanElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLSpanElement>;

export type IHtmlHTMLSpanElement<N extends HTMLSpanElement> =
  IHtmlHTMLElement<N>;
