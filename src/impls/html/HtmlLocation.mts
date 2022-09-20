import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { IHtmlLocation } from "@/specs/html/interfaces/IHtmlLocation.mjs";
import * as E from "fp-ts/Either";

export class HtmlLocation
  extends Wrapper<Location>
  implements IHtmlLocation<Location>
{
  get href(): E.Either<SecurityErrorDomException, string> {
    return E.tryCatch(
      () => this.native.href,
      /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- Spec only lists "SecurityError" DOMException.*/
      (error) => error as SecurityErrorDomException
    );
  }
  setHref(value: string): void;
  setHref(value: unknown): E.Either<TypeError, void>;
  setHref(value: unknown): void | E.Either<TypeError, void> {
    if (typeof value === "string") {
      this.native.href = value;
      return;
    }

    return E.tryCatch(
      () => {
        /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- Try non-string values anyway. */
        (this.native.href as unknown) = value;
      },
      /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- Spec only lists TypeError. */
      (error) => error as TypeError
    );
  }
  get origin(): E.Either<SecurityErrorDomException, string> {
    return E.tryCatch(
      () => this.native.origin,
      /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- Spec only lists "SecurityError" DOMException.*/
      (error) => error as SecurityErrorDomException
    );
  }
  get protocol(): E.Either<SecurityErrorDomException, string> {
    return E.tryCatch(
      () => this.native.protocol,
      /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- Spec only lists "SecurityError" DOMException.*/
      (error) => error as SecurityErrorDomException
    );
  }
  setProtocol(value: string): void;
  setProtocol(
    value: unknown
  ): E.Either<SecurityErrorDomException | SyntaxErrorDomException, void>;
  setProtocol(
    value: unknown
  ): void | E.Either<
    SecurityErrorDomException | SyntaxErrorDomException,
    void
  > {
    if (typeof value === "string") {
      this.native.protocol = value;
      return;
    }

    return E.tryCatch(
      () => {
        /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- Try non-string values anyway. */
        (this.native.protocol as unknown) = value;
      },
      /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- Spec lists "SecurityError" DOMException and
            "SyntaxError" DOMException. */
      (error) => error as SecurityErrorDomException | SyntaxErrorDomException
    );
  }
}
