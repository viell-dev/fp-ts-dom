import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type {
  InvalidCharacterErrorDomException,
  SyntaxErrorDomException,
} from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { IDomDOMTokenList } from "../../specs/dom/interfaces/IDomDOMTokenList.mjs";

export class DomDOMTokenList
  extends Wrapper<DOMTokenList>
  implements IDomDOMTokenList<DOMTokenList>
{
  get length(): number {
    return this.native.length;
  }
  item(index: number): O.Option<string> {
    return O.fromNullable(this.native.item(index));
  }
  contains(token: string): boolean {
    return this.native.contains(token);
  }
  add(
    ...tokens: string[]
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  > {
    return E.tryCatch(
      () => this.native.add(...tokens),
      (error) =>
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, these are the only possible errors. */
        error as SyntaxErrorDomException | InvalidCharacterErrorDomException
    );
  }
  remove(
    ...tokens: string[]
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  > {
    return E.tryCatch(
      () => this.native.remove(...tokens),
      (error) =>
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- According to the spec, these are the only possible errors. */
        error as SyntaxErrorDomException | InvalidCharacterErrorDomException
    );
  }
  toggle(
    token: string,
    force?: boolean
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    boolean
  > {
    return pipe(
      [token, force] as const,
      E.tryCatchK(
        (params) => this.native.toggle(...params),
        (error) =>
          /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
          error as SyntaxErrorDomException | InvalidCharacterErrorDomException
      )
    );
  }
  replace(
    token: string,
    newToken: string
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    boolean
  > {
    return pipe(
      [token, newToken] as const,
      E.tryCatchK(
        (params) => this.native.replace(...params),
        (error) =>
          /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
          error as SyntaxErrorDomException | InvalidCharacterErrorDomException
      )
    );
  }
  supports(token: string): E.Either<TypeError, boolean> {
    return E.tryCatch(
      () => this.native.supports(token),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as TypeError
    );
  }
  get value(): string {
    return this.native.value;
  }
  set value(value: string) {
    this.native.value = value;
  }

  *[Symbol.iterator](): Iterator<string> {
    for (const token of this.native) {
      yield token;
    }
  }
}
