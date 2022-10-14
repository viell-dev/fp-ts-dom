import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLHeadingElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLHeadingElement>;

export type IHtmlHTMLHeadingElement<N extends HTMLHeadingElement> =
  IHtmlHTMLElement<N>;
