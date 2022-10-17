import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import type * as IO from "fp-ts/IO";
import type * as IOE from "fp-ts/IOEither";
import type * as IOO from "fp-ts/IOOption";
import * as O from "fp-ts/Option";
import type * as R from "fp-ts/Reader";
import * as p from "./Location/index.mjs";
import { setProtocol } from "./Location/setProtocol.mjs";

export interface SafeLocation {
  get href(): IOE.IOEither<
    DOMException & { readonly name: "SecurityError" },
    string
  >;
  setHref(value: string): IOO.IOOption<TypeError>;

  get origin(): IOE.IOEither<
    DOMException & { readonly name: "SecurityError" },
    string
  >;

  get protocol(): IOE.IOEither<
    DOMException & { readonly name: "SecurityError" },
    string
  >;

  setProtocol(
    value: string
  ): IOO.IOOption<DOMException & { readonly name: "SecurityError" }>;

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

  get ancestorOrigins(): IO.IO<DOMStringList>;
}

export const getSafeLocation: R.Reader<Location, SafeLocation> = (
  location
) => ({
  get href() {
    return pipe(location, p.href);
  },
  setHref(value: string) {
    return () =>
      pipe(
        E.tryCatch(() => {
          location.href = value;
        }, unsafeCoerce<TypeError>),
        O.getLeft
      );
  },

  get origin() {
    return pipe(location, p.origin);
  },

  get protocol() {
    return pipe(location, p.protocol);
  },
  setProtocol(value: string) {
    return setProtocol(location, value);
  },

  get host() {
    return pipe(location, p.host);
  },
  setHost(host: string) {
    return () => {
      location.host = host;
    };
  },

  get hostname() {
    return pipe(location, p.hostname);
  },
  setHostname(hostname: string) {
    return () => {
      location.hostname = hostname;
    };
  },

  get port() {
    return pipe(location, p.port);
  },
  setPort(port: string) {
    return () => {
      location.port = port;
    };
  },

  get pathname() {
    return pipe(location, p.pathname);
  },
  setPathname(pathname: string) {
    return () => {
      location.pathname = pathname;
    };
  },

  get search() {
    return pipe(location, p.search);
  },
  setSearch(search: string) {
    return () => {
      location.search = search;
    };
  },

  get hash() {
    return pipe(location, p.hash);
  },
  setHash(hash: string) {
    return () => {
      location.hash = hash;
    };
  },

  get ancestorOrigins() {
    return pipe(location, p.ancestorOrigins);
  },
});
