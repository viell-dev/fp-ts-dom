import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import type * as IOO from "fp-ts/IOOption";
import * as O from "fp-ts/Option";
import { unsafeCoerce } from "../../helpers/unsafeCoerce.mjs";

export const setProtocol =
  (
    location: Location,
    value: string
  ): IOO.IOOption<DOMException & { readonly name: "SecurityError" }> =>
  () =>
    pipe(
      E.tryCatch(() => {
        location.protocol = value;
      }, unsafeCoerce<DOMException & { readonly name: "SecurityError" }>),
      O.getLeft
    );
