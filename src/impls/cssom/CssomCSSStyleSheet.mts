import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as TE from "fp-ts/TaskEither";
import type {
  NotAllowedErrorDomException,
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "../../exceptions/DomException.mjs";
import type { ICssomCSSStyleSheet } from "../../specs/cssom/interfaces/ICssomCSSStyleSheet.mjs";
import { CssomCSSRule } from "./CssomCSSRule.mjs";
import { CssomCSSRuleList } from "./CssomCSSRuleList.mjs";
import { CssomStyleSheetBase } from "./CssomStyleSheetBase.mjs";

export class CssomCSSStyleSheet
  extends CssomStyleSheetBase<CSSStyleSheet>
  implements ICssomCSSStyleSheet<CSSStyleSheet>
{
  get ownerRule(): O.Option<CssomCSSRule> {
    return pipe(
      O.fromNullable(this.native.ownerRule),
      O.map((rule) => new CssomCSSRule(rule))
    );
  }
  get cssRules(): E.Either<SecurityErrorDomException, CssomCSSRuleList> {
    return pipe(
      E.tryCatch(
        () => this.native.cssRules,
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as SecurityErrorDomException
      ),
      E.map((rules) => new CssomCSSRuleList(rules))
    );
  }
  insertRule(
    rule: string,
    index?: number
  ): E.Either<
    | SecurityErrorDomException
    | NotAllowedErrorDomException
    | SyntaxErrorDomException,
    number
  > {
    return pipe(
      tuple(rule, index),
      E.tryCatchK(
        tupled(this.native.insertRule),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | SecurityErrorDomException
            | NotAllowedErrorDomException
            | SyntaxErrorDomException
      )
    );
  }
  deleteRule(
    index: number
  ): O.Option<SecurityErrorDomException | NotAllowedErrorDomException> {
    return pipe(
      tuple(index),
      E.tryCatchK(
        tupled(this.native.deleteRule),

        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as SecurityErrorDomException | NotAllowedErrorDomException
      ),
      O.getLeft
    );
  }

  replace(
    text: string
  ): TE.TaskEither<NotAllowedErrorDomException, CssomCSSStyleSheet> {
    return pipe(
      tuple(text),
      TE.tryCatchK(
        tupled(this.native.replace),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as NotAllowedErrorDomException
      ),
      TE.map((sheet) => new CssomCSSStyleSheet(sheet))
    );
  }
  replaceSync(text: string): O.Option<NotAllowedErrorDomException> {
    return pipe(
      tuple(text),
      E.tryCatchK(
        tupled(this.native.replace),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as NotAllowedErrorDomException
      ),
      O.getLeft
    );
  }
}
