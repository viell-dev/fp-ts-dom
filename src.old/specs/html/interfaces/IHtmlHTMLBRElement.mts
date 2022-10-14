import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLBRElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLBRElement>;

export type IHtmlHTMLBRElement<N extends HTMLBRElement> = IHtmlHTMLElement<N>;
