import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLTableCaptionElement } from "./IHtmlHTMLTableCaptionElement.mjs";
import type { IHtmlHTMLTableRowElement } from "./IHtmlHTMLTableRowElement.mjs";
import type { IHtmlHTMLTableSectionElement } from "./IHtmlHTMLTableSectionElement.mjs";

export type IHtmlHTMLTableElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTableElement>;

export interface IHtmlHTMLTableElement<N extends HTMLTableElement>
  extends IHtmlHTMLElement<N> {
  caption: O.Option<IHtmlHTMLTableCaptionElement<HTMLTableCaptionElement>>;
  createCaption(): IHtmlHTMLTableCaptionElement<HTMLTableCaptionElement>;
  deleteCaption(): void;

  /**
   * @throws
   * When setting, if the new value is not a `thead` element, then throw a
   * "HierarchyRequestError" DOMException.
   */
  tHead: O.Option<IHtmlHTMLTableSectionElement<HTMLTableSectionElement>>;
  createTHead(): IHtmlHTMLTableSectionElement<HTMLTableSectionElement>;
  deleteTHead(): void;

  /**
   * @throws
   * When setting, if the new value is not a `tfoot` element, then throw a
   * "HierarchyRequestError" DOMException.
   */
  tFoot: O.Option<IHtmlHTMLTableSectionElement<HTMLTableSectionElement>>;
  createTFoot(): IHtmlHTMLTableSectionElement<HTMLTableSectionElement>;
  deleteTFoot(): void;

  tBodies: IHtmlHTMLTableSectionElement<HTMLTableSectionElement>[];
  createTBodies(): IHtmlHTMLTableSectionElement<HTMLTableSectionElement>;

  rows: IHtmlHTMLTableRowElement<HTMLTableRowElement>[];
  insertRow(
    index?: number
  ): E.Either<RangeError, IHtmlHTMLTableRowElement<HTMLTableRowElement>>;
  deleteRow(): O.Option<RangeError>;
}
