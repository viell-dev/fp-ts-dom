import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { IHtmlNavigator } from "@/specs/html/interfaces/IHtmlNavigator.mjs";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";

export class HtmlNavigator
  extends Wrapper<Navigator>
  implements IHtmlNavigator<Navigator>
{
  get userAgent(): string {
    return this.native.userAgent;
  }
  get language(): string {
    return this.native.language;
  }
  get languages(): ReadonlyArray<string> {
    return this.native.languages;
  }
  get onLine(): boolean {
    return this.native.onLine;
  }
  registerProtocolHandler(
    scheme: string,
    url: string
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException> {
    return pipe(
      tuple(scheme, url),
      E.tryCatchK(
        tupled(this.native.registerProtocolHandler),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as SecurityErrorDomException | SyntaxErrorDomException
      ),
      O.getLeft
    );
  }
  unregisterProtocolHandler(
    scheme: string,
    url: string
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException> {
    return pipe(
      tuple(scheme, url),
      E.tryCatchK(
        tupled(
          /* eslint-disable @typescript-eslint/consistent-type-assertions
          -- unregisterProtocolHandler is missing in the TypeScript types. */
          (
            this.native as Navigator & {
              unregisterProtocolHandler: (scheme: string, url: string) => void;
            }
          ).unregisterProtocolHandler
          /* eslint-enable @typescript-eslint/consistent-type-assertions
          -- Re-enabling the rule. */
        ),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as SecurityErrorDomException | SyntaxErrorDomException
      ),
      O.getLeft
    );
  }
  get cookieEnabled(): boolean {
    return this.native.cookieEnabled;
  }
  get pdfViewerEnabled(): boolean {
    return this.native.pdfViewerEnabled;
  }
  get hardwareConcurrency(): number {
    return this.native.hardwareConcurrency;
  }
}
