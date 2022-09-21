import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLLIElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLLIElement>;

export interface IHtmlHTMLLIElement extends IHtmlHTMLElement<HTMLLIElement> {
  value: number;
}
