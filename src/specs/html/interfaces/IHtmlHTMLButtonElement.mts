import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLButtonElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLButtonElement>;

export interface IHtmlHTMLButtonElement<N extends HTMLButtonElement>
  extends IHtmlHTMLElement<N> {
  disabled: boolean;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  name: string;
  type: string;
  value: string;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;

  readonly labels: IDomNode<Node>[];
}
