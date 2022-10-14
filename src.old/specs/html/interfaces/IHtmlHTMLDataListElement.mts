import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDataListElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDataListElement>;

export interface IHtmlHTMLDataListElement<N extends HTMLDataListElement>
  extends IHtmlHTMLElement<N> {
  options: IDomElement<Element>[];
}
