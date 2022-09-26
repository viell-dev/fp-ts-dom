import type { NoModificationAllowedErrorDomException } from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { NotKeyOf } from "@/helpers/NotKeyOf.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";

export interface ICssomCSSStyleDeclaration<N extends CSSStyleDeclaration>
  extends IWrapper<N> {
  /**
   * Use {@link setCssText} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the computed flag is set, then throw a
   * "NoModificationAllowedError" DOMException.
   */
  cssText: string;
  setCssText(cssText: string): O.Option<NoModificationAllowedErrorDomException>;
  readonly length: number;
  item(index: number): O.Option<string>;
  [index: number]: string;
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
  readonly parentRule: O.Option<CSSRule>;
  /**
   * Use {@link setCssFloat} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the computed flag is set, then throw a
   * "NoModificationAllowedError" DOMException.
   */
  cssFloat: string;
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
  [property: NotKeyOf<ICssomCSSStyleDeclaration<N>>]: string;
}
