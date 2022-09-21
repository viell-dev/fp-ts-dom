import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDataElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDataElement>;

export interface IHtmlHTMLDataElement
  extends IHtmlHTMLElement<HTMLDataElement> {
  value: string;
}
