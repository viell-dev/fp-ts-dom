import type { NotSupportedErrorDomException } from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.mjs";
import type * as E from "fp-ts/Either";
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
  ): O.Option<NotSupportedErrorDomException>;

  readonly form: E.Either<
    NotSupportedErrorDomException,
    O.Option<IHtmlHTMLFormElement<HTMLFormElement>>
  >;

  setValidity(
    flags?: DHtmlValidityStateFlags,
    message?: string,
    anchor?: HTMLElement | IHtmlHTMLElement<HTMLElement>
  ): O.Option<NotSupportedErrorDomException>;
  readonly willValidate: E.Either<NotSupportedErrorDomException, boolean>;
  readonly validity: E.Either<
    NotSupportedErrorDomException,
    IHtmlValidityState<ValidityState>
  >;
  readonly validationMessage: E.Either<NotSupportedErrorDomException, string>;
  checkValidity(): E.Either<NotSupportedErrorDomException, boolean>;
  reportValidity(): E.Either<NotSupportedErrorDomException, boolean>;

  readonly labels: IDomNode<Node>[];
}
