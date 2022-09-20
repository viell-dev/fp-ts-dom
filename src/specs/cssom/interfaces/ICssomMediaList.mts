import type { NotFoundErrorDomException } from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";

export interface ICssomMediaList<N extends MediaList> extends IWrapper<N> {
  mediaText: string;
  readonly length: number;
  item(index: number): O.Option<string>;
  [index: number]: string;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): E.Either<NotFoundErrorDomException, void>;
}
