import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDivElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDivElement>;

export type IHtmlHTMLDivElement<N extends HTMLDivElement> = IHtmlHTMLElement<N>;
