import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.js";
import type { IWrapper } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { IHtmlDOMStringList } from "./IHtmlDOMStringList.js";

export interface IHtmlLocation<N extends Location> extends IWrapper<N> {
  readonly href: E.Either<SecurityErrorDomException, string>;
  setHref(value: string): E.Either<TypeError, void>;
  readonly origin: E.Either<SecurityErrorDomException, string>;
  readonly protocol: E.Either<SecurityErrorDomException, string>;
  setProtocol(
    value: string
  ): E.Either<SecurityErrorDomException | SyntaxErrorDomException, void>;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;

  assign(url: string): void;
  replace(url: string): void;
  reload(): void;

  readonly ancestorOrigins: IHtmlDOMStringList<DOMStringList>;
}
