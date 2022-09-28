import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomCSSRuleList } from "@/specs/cssom/interfaces/ICssomCSSRuleList.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { CssomCSSRule } from "./CssomCSSRule.mjs";

export class CssomCSSRuleList
  extends Wrapper<CSSRuleList>
  implements ICssomCSSRuleList<CSSRuleList>
{
  item(index: number): O.Option<CssomCSSRule> {
    return pipe(
      tuple(index),
      O.fromNullableK(tupled(this.native.item)),
      O.map((rule) => new CssomCSSRule(rule))
    );
  }
  get length(): number {
    return this.native.length;
  }
}
