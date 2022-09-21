import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLModElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLModElement>;

export interface IHtmlHTMLModElement<N extends HTMLModElement>
  extends IHtmlHTMLElement<N> {
  cite: string;
  dateTime: string;
}
