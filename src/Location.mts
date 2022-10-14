import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as IO from "fp-ts/IO";
import type * as IOE from "fp-ts/IOEither";
import * as O from "fp-ts/Option";
import type * as RIO from "fp-ts/ReaderIO";
import type * as RIOE from "./extensions/ReaderIOEither.mjs";
import { getPropertyReaderIO } from "./helpers/getPropertyReaderIO.mjs";
import { getPropertyReaderIOEither } from "./helpers/getPropertyReaderIOEither.mjs";
import { unsafeAssert } from "./helpers/unsafeAssert.mjs";

export const href: RIOE.ReaderIOEither<
  Location,
  /*SecurityError*/ DOMException,
  string
> = getPropertyReaderIOEither("href");

export const origin: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("origin");

export const protocol: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("protocol");

export const host: RIO.ReaderIO<Location, string> = getPropertyReaderIO("host");

export const hostname: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("hostname");

export const port: RIO.ReaderIO<Location, string> = getPropertyReaderIO("port");

export const pathname: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("pathname");

export const search: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("search");

export const hash: RIO.ReaderIO<Location, string> = getPropertyReaderIO("hash");

export const safeLocation = (location: Location) => () => ({
  get href(): IOE.IOEither</*SecurityError*/ DOMException, string> {
    return pipe(location, href);
  },
  setHref(value: string): O.Option<TypeError> {
    return pipe(
      E.tryCatch(() => {
        location.href = value;
      }, unsafeAssert<TypeError>),
      O.getLeft
    );
  },
  get origin() {
    return pipe(location, origin);
  },
  get protocol() {
    return pipe(location, protocol);
  },
  get host() {
    return pipe(location, host);
  },
  get hostname() {
    return pipe(location, hostname);
  },
  get port() {
    return pipe(location, port);
  },
  get pathname() {
    return pipe(location, pathname);
  },
  get search() {
    return pipe(location, search);
  },
  get hash() {
    return pipe(location, hash);
  },
});

const test = pipe(
  window.location,
  safeLocation,
  IO.map((l) => l.href)
);
test;
