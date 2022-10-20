import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type { SecurityErrorDomException } from "@/types/DomException.mjs";
import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const hrefGetter = () =>
  R.asks(
    E.tryCatchK(
      (r: Location) => r.href,
      unsafeCoerce<SecurityErrorDomException>
    )
  );

export const hrefSetter = (value: string) =>
  S.gets(
    flow(
      E.tryCatchK((s: Location) => {
        s.href = value;
      }, unsafeCoerce<TypeError>),
      O.getLeft
    )
  );
