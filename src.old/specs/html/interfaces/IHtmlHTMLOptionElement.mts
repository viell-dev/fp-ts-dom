import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";

export type IHtmlHTMLOptionElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLOptionElement>;

export interface IHtmlHTMLOptionElement<N extends HTMLOptionElement>
  extends IHtmlHTMLElement<N> {
  disabled: boolean;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  label: string;
  defaultSelected: boolean;
  selected: boolean;
  value: string;

  text: string;
  readonly index: number;
}
