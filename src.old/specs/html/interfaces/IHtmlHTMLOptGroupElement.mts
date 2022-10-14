import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLOptGroupElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLOptGroupElement>;

export interface IHtmlHTMLOptGroupElement<N extends HTMLOptGroupElement>
  extends IHtmlHTMLElement<N> {
  disabled: boolean;
  label: string;
}
