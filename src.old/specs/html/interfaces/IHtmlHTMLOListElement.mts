import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLOListElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLOListElement>;

export interface IHtmlHTMLOListElement<N extends HTMLOListElement>
  extends IHtmlHTMLElement<N> {
  reversed: boolean;
  start: number;
  type: string;
}
