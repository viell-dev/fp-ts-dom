import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import type * as IO from "fp-ts/IO";
import type * as IOE from "fp-ts/IOEither";
import type * as IOO from "fp-ts/IOOption";
import * as O from "fp-ts/Option";
import type * as R from "fp-ts/Reader";
import * as RIO from "fp-ts/ReaderIO";
import * as L from "./extensions/List.mjs";
import type * as RIOE from "./extensions/ReaderIOEither.mjs";
import { getPropertyReaderIO } from "./helpers/getPropertyReaderIO.mjs";
import { getPropertyReaderIOEither } from "./helpers/getPropertyReaderIOEither.mjs";
import { unsafeAssert } from "./helpers/unsafeAssert.mjs";

export const href: RIOE.ReaderIOEither<
  Location,
  /*SecurityError*/ DOMException,
  string
> = getPropertyReaderIOEither("href");

export const origin: RIOE.ReaderIOEither<
  Location,
  /*SecurityError*/ DOMException,
  string
> = getPropertyReaderIOEither("origin");

export const protocol: RIOE.ReaderIOEither<
  Location,
  /*SecurityError*/ DOMException,
  string
> = getPropertyReaderIOEither("protocol");

export const host: RIO.ReaderIO<Location, string> = getPropertyReaderIO("host");

export const hostname: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("hostname");

export const port: RIO.ReaderIO<Location, string> = getPropertyReaderIO("port");

export const pathname: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("pathname");

export const search: RIO.ReaderIO<Location, string> =
  getPropertyReaderIO("search");

export const hash: RIO.ReaderIO<Location, string> = getPropertyReaderIO("hash");

export const ancestorOrigins: RIO.ReaderIO<Location, L.List<string>> = pipe(
  getPropertyReaderIO<Location, "ancestorOrigins">("ancestorOrigins"),
  RIO.map((l) => pipe(Array.from(l), L.fromArray))
);

export interface SafeLocation {
  get href(): IOE.IOEither<DOMException, string>;
  setHref(value: string): IOO.IOOption<TypeError>;

  get origin(): IOE.IOEither<DOMException, string>;

  get protocol(): IOE.IOEither<DOMException, string>;

  setProtocol(value: string): IOO.IOOption<DOMException>;

  get host(): IO.IO<string>;
  setHost(host: string): IO.IO<void>;

  get hostname(): IO.IO<string>;
  setHostname(hostname: string): IO.IO<void>;

  get port(): IO.IO<string>;
  setPort(port: string): IO.IO<void>;

  get pathname(): IO.IO<string>;
  setPathname(pathname: string): IO.IO<void>;

  get search(): IO.IO<string>;
  setSearch(search: string): IO.IO<void>;

  get hash(): IO.IO<string>;
  setHash(hash: string): IO.IO<void>;

  /*
  assign(url: string): void;
  replace(url: string): void;
  reload(): void;
  */

  get ancestorOrigins(): IO.IO<L.List<string>>;
}

export const safeLocation: R.Reader<Location, SafeLocation> = (location) => ({
  get href(): IOE.IOEither</*SecurityError*/ DOMException, string> {
    return pipe(location, href);
  },
  setHref(value: string): IOO.IOOption<TypeError> {
    return () =>
      pipe(
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
  setProtocol(value: string): IOO.IOOption<DOMException> {
    return () =>
      pipe(
        E.tryCatch(() => {
          location.protocol = value;
        }, unsafeAssert<DOMException>),
        O.getLeft
      );
  },

  get host() {
    return pipe(location, host);
  },
  setHost(host: string) {
    return () => {
      location.host = host;
    };
  },

  get hostname() {
    return pipe(location, hostname);
  },
  setHostname(hostname: string) {
    return () => {
      location.hostname = hostname;
    };
  },

  get port() {
    return pipe(location, port);
  },
  setPort(port: string) {
    return () => {
      location.port = port;
    };
  },

  get pathname() {
    return pipe(location, pathname);
  },
  setPathname(pathname: string) {
    return () => {
      location.pathname = pathname;
    };
  },

  get search() {
    return pipe(location, search);
  },
  setSearch(search: string) {
    return () => {
      location.search = search;
    };
  },

  get hash() {
    return pipe(location, hash);
  },
  setHash(hash: string) {
    return () => {
      location.hash = hash;
    };
  },

  get ancestorOrigins() {
    return pipe(location, ancestorOrigins);
  },
});

const test = pipe(window.location, safeLocation, (l) => l.href);
test;
