import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomCSSRule } from "@/specs/cssom/interfaces/ICssomCSSRule.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
//import { CssomCSSStyleSheet } from "./CssomCSSStyleSheet.mjs";

export class CssomCSSRule
  extends Wrapper<CSSRule>
  implements ICssomCSSRule<CSSRule>
{
  get cssText(): string {
    return this.native.cssText;
  }
  set cssText(value: string) {
    this.native.cssText = value;
  }
  get parentRule(): O.Option<CssomCSSRule> {
    return pipe(
      O.fromNullable(this.native.parentRule),
      O.map((rule) => new CssomCSSRule(rule))
    );
  }
  /*get parentStyleSheet(): O.Option<CssomCSSStyleSheet> {
    return pipe(
      O.fromNullable(this.native.parentStyleSheet),
      O.map((sheet) => new CssomCSSStyleSheet(sheet))
    );
  }*/
}
