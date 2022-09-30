import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { NoModificationAllowedErrorDomException } from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";

export interface ICssomCSSStyleDeclaration<N extends CSSStyleDeclaration>
  extends IWrapper<N> {
  /** Use {@link setCssText} to set. */
  readonly cssText: string;
  setCssText(cssText: string): O.Option<NoModificationAllowedErrorDomException>;
  readonly length: number;
  item(index: number): O.Option<string>;
  //[index: number]: string;
  getPropertyValue(property: string): string;
  getPropertyPriority(property: string): string;
  setProperty(
    property: string,
    value: string,
    priority?: string
  ): O.Option<NoModificationAllowedErrorDomException>;
  removeProperty(
    property: string
  ): E.Either<NoModificationAllowedErrorDomException, string>;
  readonly parentRule: O.Option<ICssomCSSRule<CSSRule>>;
  /** Use {@link setCssFloat} to set. */
  readonly cssFloat: string;
  setCssFloat(
    cssFloat: string
  ): O.Option<NoModificationAllowedErrorDomException>;

  /**
   * Use {@link setProperty} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the computed flag is set, then throw a
   * "NoModificationAllowedError" DOMException.
   */
  //[property: NotKeyOf<ICssomCSSStyleDeclaration<N>>]: string;
}
