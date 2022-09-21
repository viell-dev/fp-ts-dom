import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";

export type IHtmlHTMLLabelElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLLabelElement>;

export interface IHtmlHTMLLabelElement<N extends HTMLLabelElement>
  extends IHtmlHTMLElement<N> {
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  htmlFor: string;
  readonly control: O.Option<IHtmlHTMLElement<HTMLElement>>;
}
