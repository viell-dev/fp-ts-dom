import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLFieldSetElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLFieldSetElement>;

export interface IHtmlHTMLFieldSetElement<N extends HTMLFieldSetElement>
  extends IHtmlHTMLElement<N> {
  disabled: boolean;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  name: string;

  readonly type: string;

  readonly elements: IDomElement<Element>[];

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}
