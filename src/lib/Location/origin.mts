import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type { SecurityErrorDomException } from "@/types/DomException.mjs";
import * as E from "fp-ts/Either";
import * as R from "fp-ts/Reader";

export const originGetter = () =>
  R.asks(
    E.tryCatchK(
      (r: Location) => r.origin,
      unsafeCoerce<SecurityErrorDomException>
    )
  );
