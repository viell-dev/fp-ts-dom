import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLOListElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLOListElement>;

export interface IHtmlHTMLOListElement
  extends IHtmlHTMLElement<HTMLOListElement> {
  reversed: boolean;
  start: number;
  type: string;
}
