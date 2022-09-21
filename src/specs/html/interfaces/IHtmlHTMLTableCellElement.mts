import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTableCellElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTableCellElement>;

export interface IHtmlHTMLTableCellElement<N extends HTMLTableCellElement>
  extends IHtmlHTMLElement<N> {
  colSpan: number;
  rowSpan: number;
  headers: string;
  readonly cellIndex: number;

  scope: string;
  abbr: string;
}
