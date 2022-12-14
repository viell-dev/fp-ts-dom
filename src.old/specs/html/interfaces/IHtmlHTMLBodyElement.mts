import type { MHtmlWindowEventHandlers } from "../mixins/MHtmlWindowEventHandlers.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLBodyElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLBodyElement>;

export interface IHtmlHTMLBodyElement<N extends HTMLBodyElement>
  extends IHtmlHTMLElement<N>,
    MHtmlWindowEventHandlers {}
