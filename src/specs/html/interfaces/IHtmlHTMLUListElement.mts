import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLUListElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLUListElement>;

export type IHtmlHTMLUListElement<N extends HTMLUListElement> =
  IHtmlHTMLElement<N>;
