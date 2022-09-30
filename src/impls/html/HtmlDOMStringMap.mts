import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import type {
  InvalidCharacterErrorDomException,
  SyntaxErrorDomException,
} from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { NotKeyOf } from "../../helpers/NotKeyOf.mjs";
import type { IHtmlDOMStringMap } from "../../specs/html/interfaces/IHtmlDOMStringMap.mjs";

export class HtmlDOMStringMap
  extends Wrapper<DOMStringMap>
  implements IHtmlDOMStringMap<DOMStringMap>
{
  setName(
    name: NotKeyOf<HtmlDOMStringMap>,
    value: string
  ): E.Either<
    SyntaxErrorDomException | InvalidCharacterErrorDomException,
    void
  > {
    return pipe(
      tuple(name, value),
      E.tryCatchK(
        tupled((name, value) => {
          this.native[name] = value;
        }),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as SyntaxErrorDomException | InvalidCharacterErrorDomException
      )
    );
  }
}
