import type {
  NotAllowedErrorDomException,
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { DCssomCSSStyleSheetInit } from "../dictionaries/DCssomCSSStyleSheetInit.mjs";
import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";
import type { ICssomCSSRuleList } from "./ICssomCSSRuleList.mjs";
import type { ICssomStyleSheet } from "./ICssomStyleSheet.mjs";

export interface ICssomCSSStyleSheetConstructors
  extends IWrapperConstructors<CSSStyleSheet> {
  new (options?: DCssomCSSStyleSheetInit): ICssomCSSStyleSheet<CSSStyleSheet>;
}

export interface ICssomCSSStyleSheet<N extends CSSStyleSheet>
  extends ICssomStyleSheet<N> {
  readonly ownerRule: O.Option<ICssomCSSRule<CSSRule>>;
  readonly cssRules: E.Either<
    SecurityErrorDomException,
    ICssomCSSRuleList<CSSRuleList>
  >;
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
  ): O.Option<SecurityErrorDomException | NotAllowedErrorDomException>;

  /*replace(
    text: string
  ): TE.TaskEither<
    NotAllowedErrorDomException,
    ICssomCSSStyleSheet<CSSStyleSheet>
  >;*/
  replaceSync(text: string): O.Option<NotAllowedErrorDomException>;
}
