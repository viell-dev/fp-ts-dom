import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDataElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDataElement>;

export interface IHtmlHTMLDataElement<N extends HTMLDataElement>
  extends IHtmlHTMLElement<N> {
  value: string;
}
