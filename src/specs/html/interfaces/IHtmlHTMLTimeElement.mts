import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTimeElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTimeElement>;

export interface IHtmlHTMLTimeElement
  extends IHtmlHTMLElement<HTMLTimeElement> {
  dateTime: string;
}
