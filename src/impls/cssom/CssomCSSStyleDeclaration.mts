import type { NoModificationAllowedErrorDomException } from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomCSSStyleDeclaration } from "@/specs/cssom/interfaces/ICssomCSSStyleDeclaration.mjs";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { CssomCSSRule } from "./CssomCSSRule.mjs";

export class CssomCSSStyleDeclaration
  extends Wrapper<CSSStyleDeclaration>
  implements ICssomCSSStyleDeclaration<CSSStyleDeclaration>
{
  /** Use {@link setCssText} to set. */
  get cssText(): string {
    return this.native.cssText;
  }
  setCssText(
    cssText: string
  ): O.Option<NoModificationAllowedErrorDomException> {
    return pipe(
      tuple(cssText),
      E.tryCatchK(
        tupled((cssText) => {
          this.native.cssText = cssText;
        }),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NoModificationAllowedErrorDomException
      ),
      O.getLeft
    );
  }
  get length(): number {
    return this.native.length;
  }
  item(index: number): O.Option<string> {
    return pipe(tuple(index), tupled(this.native.item), O.fromNullable);
  }
  //[index: number]: string;
  getPropertyValue(property: string): string {
    return this.native.getPropertyValue(property);
  }
  getPropertyPriority(property: string): string {
    return this.native.getPropertyPriority(property);
  }
  setProperty(
    property: string,
    value: string,
    priority?: string
  ): O.Option<NoModificationAllowedErrorDomException> {
    return pipe(
      tuple(property, value, priority),
      E.tryCatchK(
        tupled(this.native.setProperty),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NoModificationAllowedErrorDomException
      ),
      O.getLeft
    );
  }
  removeProperty(
    property: string
  ): E.Either<NoModificationAllowedErrorDomException, string> {
    return pipe(
      tuple(property),
      E.tryCatchK(
        tupled(this.native.removeProperty),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NoModificationAllowedErrorDomException
      )
    );
  }
  get parentRule(): O.Option<CssomCSSRule> {
    return pipe(
      O.fromNullable(this.native.parentRule),
      O.map((rule) => new CssomCSSRule(rule))
    );
  }
  /** Use {@link setCssFloat} to set. */
  get cssFloat(): string {
    return this.native.cssFloat;
  }
  setCssFloat(
    cssFloat: string
  ): O.Option<NoModificationAllowedErrorDomException> {
    return pipe(
      tuple(cssFloat),
      E.tryCatchK(
        tupled((cssFloat) => {
          this.native.cssFloat = cssFloat;
        }),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NoModificationAllowedErrorDomException
      ),
      O.getLeft
    );
  }
}
