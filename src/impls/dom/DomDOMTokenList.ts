import type {
  InvalidCharacterErrorDomException,
  SyntaxErrorDomException,
} from "@/exceptions/DomException.js";
import { Wrapper } from "@/globals/Wrapper.js";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";

export class DomDOMTokenList
  extends Wrapper<DOMTokenList>
  implements IDomDOMTokenList<DOMTokenList>
{
  [index: number]: string;

  private static indexHandler: ProxyHandler<DomDOMTokenList> = {
    get(target, property) {
      if (typeof property === "string") {
        const index = parseInt(property);
        if (index.toString() === property)
          return pipe(target.native.item(index), O.fromNullable, O.toUndefined);
      }

      return;
    },
  };

  constructor(domTokenList: DOMTokenList) {
    super(domTokenList);

    return new Proxy(this, DomDOMTokenList.indexHandler);
  }

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
