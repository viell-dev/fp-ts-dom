import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.mjs";
import type { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.mjs";
import type * as O from "fp-ts/Option";
import type { DHtmlValidityStateFlags } from "../dictionaries/DHtmlValidityStateFlags.mjs";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

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
