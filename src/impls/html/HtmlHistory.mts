import type { SecurityErrorDomException } from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { EHtmlScrollRestoration } from "@/specs/html/enums/EHtmlScrollRestoration.mjs";
import type { IHtmlHistory } from "@/specs/html/interfaces/IHtmlHistory.mjs";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";

export class HtmlHistory
  extends Wrapper<History>
  implements IHtmlHistory<History>
{
  get length(): E.Either<SecurityErrorDomException, number> {
    return E.tryCatch(
      () => this.native.length,
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as SecurityErrorDomException
    );
  }
  get scrollRestoration(): E.Either<
    SecurityErrorDomException,
    EHtmlScrollRestoration
  > {
    return E.tryCatch(
      () => this.native.scrollRestoration,
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as SecurityErrorDomException
    );
  }
  setScrollRestoration(
    scrollRestoration: EHtmlScrollRestoration
  ): O.Option<SecurityErrorDomException> {
    return pipe(
      E.tryCatch(
        () => (this.native.scrollRestoration = scrollRestoration),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  get state(): E.Either<SecurityErrorDomException, unknown> {
    return E.tryCatch(
      () => this.native.state,
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as SecurityErrorDomException
    );
  }
  go(delta?: number): O.Option<SecurityErrorDomException> {
    return pipe(
      tuple(delta),
      E.tryCatchK(
        tupled(this.native.go),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  back(): O.Option<SecurityErrorDomException> {
    return pipe(
      E.tryCatch(
        () => this.native.back(),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  forward(): O.Option<SecurityErrorDomException> {
    return pipe(
      E.tryCatch(
        () => this.native.forward(),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  pushState(
    data: unknown,
    unused: string,
    url?: string | null
  ): O.Option<SecurityErrorDomException> {
    return pipe(
      tuple(data, unused, url),
      E.tryCatchK(
        tupled(this.native.pushState),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
  replaceState(
    data: unknown,
    unused: string,
    url?: string | null
  ): O.Option<SecurityErrorDomException> {
    return pipe(
      tuple(data, unused, url),
      E.tryCatchK(
        tupled(this.native.replaceState),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SecurityErrorDomException
      ),
      O.getLeft
    );
  }
}
