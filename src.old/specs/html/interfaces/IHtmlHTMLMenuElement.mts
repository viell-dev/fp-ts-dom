import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMenuElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMenuElement>;

export type IHtmlHTMLMenuElement<N extends HTMLMenuElement> =
  IHtmlHTMLElement<N>;
