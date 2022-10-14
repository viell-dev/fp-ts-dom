import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTimeElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTimeElement>;

export interface IHtmlHTMLTimeElement<N extends HTMLTimeElement>
  extends IHtmlHTMLElement<N> {
  dateTime: string;
}
