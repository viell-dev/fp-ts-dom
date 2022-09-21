import type {
  NotAllowedErrorDomException,
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";
import type { ICssomCSSRuleList } from "./ICssomCSSRuleList.mjs";

export interface ICssomCSSGroupingRule<N extends CSSGroupingRule>
  extends ICssomCSSRule<N> {
  readonly cssRules: ICssomCSSRuleList<CSSRuleList>;
  insertRule(
    rule: string,
    index?: number
  ): E.Either<
    | SecurityErrorDomException
    | NotAllowedErrorDomException
    | SyntaxErrorDomException,
    number
  >;
  deleteRule(
    index: number
  ): E.Either<SecurityErrorDomException | NotAllowedErrorDomException, void>;
}
