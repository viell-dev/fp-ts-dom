import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type {
  InvalidStateErrorDomException,
  NoModificationAllowedErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { MCssomElementCSSInlineStyle } from "../../cssom/mixins/MCssomElementCSSInlineStyle.mjs";
import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlElementContentEditable } from "../mixins/MHtmlElementContentEditable.mjs";
import type { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.mjs";
import type { MHtmlHTMLOrSVGElement } from "../mixins/MHtmlHTMLOrSVGElement.mjs";
import type { IHtmlElementInternals } from "./IHtmlElementInternals.mjs";

/** @sealed */
export interface IHtmlHTMLElementConstructorsBase<N extends HTMLElement>
  extends IWrapperConstructors<N> {
  /**
   * Use {@link create} instead to get an `Either`.
   *
   * @throws TypeError
   * @throws "InvalidStateError" DOMException
   */
  new (): IHtmlHTMLElement<N>;

  create(): E.Either<
    TypeError | InvalidStateErrorDomException,
    IHtmlHTMLElement<N>
  >;
}

/** @sealed */
export type IHtmlHTMLElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLElement>;

export interface IHtmlHTMLElement<N extends HTMLElement>
  extends IDomElement<N>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers,
    MHtmlElementContentEditable,
    MHtmlHTMLOrSVGElement,
    MCssomElementCSSInlineStyle {
  // metadata attributes
  title: string;
  lang: string;
  translate: boolean;
  dir: string;

  // user interaction
  readonly hidden: "until-found" | boolean;
  setHidden(hidden: boolean | number | string | null): void;
  inert: boolean;
  click(): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  draggable: boolean;
  spellcheck: boolean;
  autocapitalize: string;

  innerText: string;
  /**
   * Use {@link setOuterText} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if *this*'s parent is `null`, then throw a
   * "NoModificationAllowedError" DOMException.
   */
  outerText: string;
  setOuterText(
    outerText: string
  ): O.Option<NoModificationAllowedErrorDomException>;

  attachInternals(): IHtmlElementInternals<ElementInternals>;
}
