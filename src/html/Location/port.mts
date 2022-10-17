import { getPropertyReaderIO } from "@/helpers/readers/property/getPropertyReaderIO.mjs";
import type * as RIO from "fp-ts/ReaderIO";

export const port: RIO.ReaderIO<Location, string> = getPropertyReaderIO("port");
