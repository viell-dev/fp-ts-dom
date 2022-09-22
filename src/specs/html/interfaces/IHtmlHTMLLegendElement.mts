import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";

export type IHtmlHTMLLegendElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLLegendElement>;

export interface IHtmlHTMLLegendElement<N extends HTMLLegendElement>
  extends IHtmlHTMLElement<N> {
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
}
