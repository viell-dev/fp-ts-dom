import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type { SecurityErrorDomException } from "@/types/DomException.mjs";
import * as R from "@/types/Reader.mjs";
import * as E from "@fp-ts/data/Either";

export const originGetter = () =>
  R.asks(
    E.liftThrowable(
      (r: Location) => r.origin,
      unsafeCoerce<SecurityErrorDomException>
    )
  );
