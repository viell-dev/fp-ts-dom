import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLModElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLModElement>;

export interface IHtmlHTMLModElement extends IHtmlHTMLElement<HTMLModElement> {
  cite: string;
  dateTime: string;
}
