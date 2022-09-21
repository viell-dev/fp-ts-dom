import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLLIElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLLIElement>;

export interface IHtmlHTMLLIElement<N extends HTMLLIElement>
  extends IHtmlHTMLElement<N> {
  value: number;
}
