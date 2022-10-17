import { getPropertyReaderIOEither } from "@/helpers/readers/property/getPropertyReaderIOEither.mjs";
import type * as RIOE from "@/types/ReaderIOEither.mjs";

export const protocol: RIOE.ReaderIOEither<
  Location,
  DOMException & { readonly name: "SecurityError" },
  string
> = getPropertyReaderIOEither("protocol");
