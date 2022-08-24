import { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.js";
import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import { DHtmlValidityStateFlags } from "../dictionaries/DHtmlValidityStateFlags.js";
import { IHtmlHTMLElement } from "./IHtmlHTMLElement.js";
import { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.js";
import { IHtmlValidityState } from "./IHtmlValidityState.js";

// TODO: ElementInternals includes ARIAMixin
export interface IHtmlElementInternals<N extends ElementInternals>
  extends IWrapper<N> {
  // Shadow root access
  shadowRoot: O.Option<IDomShadowRoot<ShadowRoot>>;

  // Form-associated custom elements
  setFormValue(
    value: string | File | FormData | null,
    state?: string | File | FormData | null
  ): void;

  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;

  setValidity(
    flags?: DHtmlValidityStateFlags,
    message?: string,
    anchor?: HTMLElement | IHtmlHTMLElement<HTMLElement>
  ): void;
  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;

  readonly lables: IDomNodeList<NodeList>;
}
