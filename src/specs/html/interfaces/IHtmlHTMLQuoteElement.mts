import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLQuoteElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLQuoteElement>;

export interface IHtmlHTMLQuoteElement
  extends IHtmlHTMLElement<HTMLQuoteElement> {
  cite: string;
}
