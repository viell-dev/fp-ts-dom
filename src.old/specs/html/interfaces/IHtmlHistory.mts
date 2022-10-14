import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { SecurityErrorDomException } from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { EHtmlScrollRestoration } from "../enums/EHtmlScrollRestoration.mjs";

export interface IHtmlHistory<N extends History> extends IWrapper<N> {
  readonly length: E.Either<SecurityErrorDomException, number>;
  readonly scrollRestoration: E.Either<
    SecurityErrorDomException,
    EHtmlScrollRestoration
  >;
  setScrollRestoration(
    scrollRestoration: EHtmlScrollRestoration
  ): O.Option<SecurityErrorDomException>;
  readonly state: E.Either<SecurityErrorDomException, unknown>;
  go(delta?: number): O.Option<SecurityErrorDomException>;
  back(): O.Option<SecurityErrorDomException>;
  forward(): O.Option<SecurityErrorDomException>;
  pushState(
    data: unknown,
    unused: string,
    url?: string | null
  ): O.Option<SecurityErrorDomException>;
  replaceState(
    data: unknown,
    unused: string,
    url?: string | null
  ): O.Option<SecurityErrorDomException>;
}
