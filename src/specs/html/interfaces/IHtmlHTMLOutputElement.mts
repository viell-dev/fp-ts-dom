import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLOutputElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLOutputElement>;

export interface IHtmlHTMLOutputElement<N extends HTMLOutputElement>
  extends IHtmlHTMLElement<N> {
  readonly htmlFor: IDomDOMTokenList<DOMTokenList>;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  name: string;

  readonly type: string;
  defaultValue: string;
  value: string;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;

  readonly labels: IDomNode<Node>[];
}
