import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLHeadElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLHeadElement>;

export type IHtmlHTMLHeadElement<N extends HTMLHeadElement> =
  IHtmlHTMLElement<N>;
