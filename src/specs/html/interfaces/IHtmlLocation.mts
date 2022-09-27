import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";

export interface IHtmlLocation<N extends Location> extends IWrapper<N> {
  readonly href: E.Either<SecurityErrorDomException, string>;
  setHref(value: string): O.Option<TypeError>;
  readonly origin: E.Either<SecurityErrorDomException, string>;
  readonly protocol: E.Either<SecurityErrorDomException, string>;
  setProtocol(
    value: string
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException>;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;

  assign(url: string): void;
  replace(url: string): void;
  reload(): void;

  readonly ancestorOrigins: string[];
}
