import type { NotSupportedErrorDomException } from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import { getNativeOrUndefined } from "@/helpers/getNative.mjs";
import type { DHtmlValidityStateFlags } from "@/specs/html/dictionaries/DHtmlValidityStateFlags.mjs";
import type { IHtmlElementInternals } from "@/specs/html/interfaces/IHtmlElementInternals.mjs";
import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomNode } from "../dom/DomNode.mjs";
import { DomShadowRoot } from "../dom/DomShadowRoot.mjs";
import { HtmlHTMLFormElement } from "./HtmlHTMLFormElement.mjs";
import { HtmlValidityState } from "./HtmlValidityState.mjs";

export class HtmlElementInternals
  extends Wrapper<ElementInternals>
  implements IHtmlElementInternals<ElementInternals>
{
  get shadowRoot(): O.Option<DomShadowRoot> {
    return pipe(
      this.native.shadowRoot,
      O.fromNullable,
      O.map((shadowRoot) => new DomShadowRoot(shadowRoot))
    );
  }

  setFormValue(
    value: File | string | FormData | null,
    state?: File | string | FormData | null
  ): O.Option<NotSupportedErrorDomException> {
    return pipe(
      tuple(value, state),
      E.tryCatchK(
        tupled(this.native.setFormValue),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      O.getLeft
    );
  }

  get form(): O.Option<HtmlHTMLFormElement> {
    return pipe(
      this.native.form,
      O.fromNullable,
      O.map((form) => new HtmlHTMLFormElement(form))
    );
  }

  setValidity(
    flags?: DHtmlValidityStateFlags,
    message?: string,
    anchor?: HTMLElement | IHtmlHTMLElement<HTMLElement>
  ): O.Option<NotSupportedErrorDomException> {
    return pipe(
      tuple(flags, message, getNativeOrUndefined(anchor)),
      E.tryCatchK(
        tupled(this.native.setValidity),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      O.getLeft
    );
  }
  get willValidate(): E.Either<NotSupportedErrorDomException, boolean> {
    return E.tryCatch(
      () => this.native.willValidate,
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as NotSupportedErrorDomException
    );
  }
  get validity(): E.Either<NotSupportedErrorDomException, HtmlValidityState> {
    return pipe(
      E.tryCatch(
        () => this.native.validity,
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotSupportedErrorDomException
      ),
      E.map((validityState) => new HtmlValidityState(validityState))
    );
  }
  get validationMessage(): E.Either<NotSupportedErrorDomException, string> {
    return E.tryCatch(
      () => this.native.validationMessage,
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as NotSupportedErrorDomException
    );
  }
  checkValidity(): E.Either<NotSupportedErrorDomException, boolean> {
    return E.tryCatch(
      this.native.checkValidity,
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as NotSupportedErrorDomException
    );
  }
  reportValidity(): E.Either<NotSupportedErrorDomException, boolean> {
    return E.tryCatch(
      this.native.reportValidity,
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as NotSupportedErrorDomException
    );
  }

  get labels(): DomNode[] {
    return pipe(
      Array.from(this.native.labels),
      A.map((label) => new DomNode(label))
    );
  }
}
