import type {
  InvalidCharacterErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { NotKeyOf } from "@/helpers/NotKeyOf.mjs";
import type * as E from "fp-ts/Either";

export interface IHtmlDOMStringMap<N extends DOMStringMap> extends IWrapper<N> {
  /**
   * Use {@link setName} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting the value of a new or existing named property. If *name*
   * contains a U+002D HYPHEN-MINUS character (-) followed by an ASCII lower
   * alpha, then throw an "SyntaxError" DOMException.
   * @throws
   * When setting the value of a new or existing named property. If *name* does
   * not match the XML Name production, throw an "InvalidCharacterError"
   * DOMException
   */
  [name: NotKeyOf<IHtmlDOMStringMap<N>>]: string;
  setName(
    name: NotKeyOf<IHtmlDOMStringMap<N>>,
    value: string
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  >;
}
