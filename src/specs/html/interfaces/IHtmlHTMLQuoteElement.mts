import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLQuoteElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLQuoteElement>;

export interface IHtmlHTMLQuoteElement<N extends HTMLQuoteElement>
  extends IHtmlHTMLElement<N> {
  cite: string;
}
