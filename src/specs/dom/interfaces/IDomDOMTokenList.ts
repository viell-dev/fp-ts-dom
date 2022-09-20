import type {
  InvalidCharacterErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.js";
import type { IWrapper } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";

export interface IDomDOMTokenList<N extends DOMTokenList>
  extends IWrapper<N>,
    Iterable<string> {
  readonly length: number;
  item(index: number): O.Option<string>;
  [index: number]: string;
  contains(token: string): boolean;
  add(
    ...tokens: string[]
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  >;
  remove(
    ...tokens: string[]
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  >;
  toggle(
    token: string,
    force?: boolean
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    boolean
  >;
  replace(
    token: string,
    newToken: string
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    boolean
  >;
  supports(token: string): E.Either<TypeError, boolean>;
  value: string;
}
