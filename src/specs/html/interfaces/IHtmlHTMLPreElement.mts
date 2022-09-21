import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLPreElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLPreElement>;

export type IHtmlHTMLPreElement<N extends HTMLPreElement> = IHtmlHTMLElement<N>;
