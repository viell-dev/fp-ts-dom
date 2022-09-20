import type { IWrapper } from "@/globals/IWrapper.js";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import type { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.js";
import type * as O from "fp-ts/Option";
import type { DHtmlValidityStateFlags } from "../dictionaries/DHtmlValidityStateFlags.js";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.js";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.js";
import type { IHtmlValidityState } from "./IHtmlValidityState.js";

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
