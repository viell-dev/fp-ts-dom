import { getPropertyReaderIO } from "@/helpers/readers/property/getPropertyReaderIO.mjs";
import type * as RIO from "fp-ts/ReaderIO";

export const ancestorOrigins: RIO.ReaderIO<Location, DOMStringList> =
  getPropertyReaderIO("ancestorOrigins");
