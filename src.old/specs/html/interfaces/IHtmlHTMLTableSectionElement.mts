import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLTableRowElement } from "./IHtmlHTMLTableRowElement.mjs";

export type IHtmlHTMLTableSectionElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTableSectionElement>;

export interface IHtmlHTMLTableSectionElement<N extends HTMLTableSectionElement>
  extends IHtmlHTMLElement<N> {
  readonly rows: IHtmlHTMLTableRowElement<HTMLTableRowElement>[];
  insertRow(
    index?: number
  ): E.Either<RangeError, IHtmlHTMLTableRowElement<HTMLTableRowElement>>;
  deleteRow(): O.Option<RangeError>;
}
