import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type { SecurityErrorDomException } from "@/types/DomException.mjs";
import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";
import * as E from "@fp-ts/data/Either";
import { flow } from "@fp-ts/data/Function";
import type {} from "@fp-ts/data/Option";

export const hrefGetter = () =>
  R.asks(
    E.liftThrowable(
      (r: Location) => r.href,
      unsafeCoerce<SecurityErrorDomException>
    )
  );

export const hrefSetter = (value: string) =>
  S.gets(
    flow(
      E.liftThrowable((s: Location) => {
        s.href = value;
      }, unsafeCoerce<TypeError>),
      E.getLeft
    )
  );
