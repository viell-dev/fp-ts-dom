import type { NotFoundErrorDomException } from "@/exceptions/DomException.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomMediaList } from "@/specs/cssom/interfaces/ICssomMediaList.mjs";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";

export class CssomMediaList
  extends Wrapper<MediaList>
  implements ICssomMediaList<MediaList>
{
  get mediaText(): string {
    return this.native.mediaText;
  }

  set mediaText(value: string) {
    this.native.mediaText = value;
  }

  get length(): number {
    return this.native.length;
  }

  item(index: number): O.Option<string> {
    return O.fromNullable(this.native.item(index));
  }

  appendMedium(medium: string): void {
    this.native.appendMedium(medium);
  }

  deleteMedium(medium: string): O.Option<NotFoundErrorDomException> {
    return pipe(
      tuple(medium),
      E.tryCatchK(
        tupled(this.native.deleteMedium),
        /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      ),
      O.getLeft
    );
  }
}
