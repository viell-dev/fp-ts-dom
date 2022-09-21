import type * as E from "fp-ts/Either";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLTableCellElement } from "./IHtmlHTMLTableCellElement.mjs";

export type IHtmlHTMLTableRowElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTableRowElement>;

export interface IHtmlHTMLTableRowElement<N extends HTMLTableRowElement>
  extends IHtmlHTMLElement<N> {
  readonly rowIndex: number;
  readonly sectionRowIndex: number;
  readonly cells: IHtmlHTMLTableCellElement<HTMLTableCellElement>[];
  insertCell(
    index?: number
  ): E.Either<RangeError, IHtmlHTMLTableCellElement<HTMLTableCellElement>>;
  deleteCell(): E.Either<RangeError, void>;
}
