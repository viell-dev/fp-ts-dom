import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { IHtmlLocation } from "@/specs/html/interfaces/IHtmlLocation.mjs";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";

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
  setHref(value: string): O.None;
  setHref(value: unknown): O.Option<TypeError>;
  setHref(value: unknown): O.Option<TypeError> {
    return pipe(
      E.tryCatch(
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
      ),
      O.getLeft
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
  setProtocol(value: string): O.None;
  setProtocol(
    value: unknown
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException>;
  setProtocol(
    value: unknown
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException> {
    return pipe(
      E.tryCatch(
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
      ),
      O.getLeft
    );
  }
  get host(): string {
    return this.native.host;
  }
  set host(host: string) {
    this.native.host = host;
  }
  get hostname(): string {
    return this.native.hostname;
  }
  set hostname(hostname: string) {
    this.native.hostname = hostname;
  }
  get port(): string {
    return this.native.port;
  }
  set port(port: string) {
    this.native.port = port;
  }
  get pathname(): string {
    return this.native.pathname;
  }
  set pathname(pathname: string) {
    this.native.pathname = pathname;
  }
  get search(): string {
    return this.native.search;
  }
  set search(search: string) {
    this.native.search = search;
  }
  get hash(): string {
    return this.native.hash;
  }
  set hash(hash: string) {
    this.native.hash = hash;
  }

  assign(url: string): void {
    this.native.assign(url);
  }
  replace(url: string): void {
    this.native.replace(url);
  }
  reload(): void {
    this.native.reload();
  }

  get ancestorOrigins(): string[] {
    return Array.from(this.native.ancestorOrigins);
  }
}
