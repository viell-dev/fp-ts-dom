import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTableColElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTableColElement>;

export interface IHtmlHTMLTableColElement<N extends HTMLTableColElement>
  extends IHtmlHTMLElement<N> {
  span: number;
}
