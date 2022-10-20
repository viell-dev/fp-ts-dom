import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/types/DomException.mjs";
import { Safe } from "@/types/Safe.mjs";
import type * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import type * as O from "fp-ts/Option";
import type * as R from "fp-ts/Reader";
import { ancestorOriginsGetter } from "./Location/ancestorOrigins.mjs";
import { assignMethod } from "./Location/assign.mjs";
import { hashGetter, hashSetter } from "./Location/hash.mjs";
import { hostGetter, hostSetter } from "./Location/host.mjs";
import { hostnameGetter, hostnameSetter } from "./Location/hostname.mjs";
import { hrefGetter, hrefSetter } from "./Location/href.mjs";
import { originGetter } from "./Location/origin.mjs";
import { pathnameGetter, pathnameSetter } from "./Location/pathname.mjs";
import { portGetter, portSetter } from "./Location/port.mjs";
import { protocolGetter, protocolSetter } from "./Location/protocol.mjs";
import { reloadMethod } from "./Location/reload.mjs";
import { replaceMethod } from "./Location/replace.mjs";
import { searchGetter, searchSetter } from "./Location/search.mjs";

class SafeLocation extends Safe<Location> {
  get href(): E.Either<SecurityErrorDomException, string> {
    return pipe(this.unsafe, hrefGetter());
  }
  setHref(value: string): O.Option<TypeError> {
    return pipe(this.unsafe, hrefSetter(value), this.setState);
  }

  get origin(): E.Either<SecurityErrorDomException, string> {
    return pipe(this.unsafe, originGetter());
  }

  get protocol(): E.Either<SecurityErrorDomException, string> {
    return pipe(this.unsafe, protocolGetter());
  }
  setProtocol(
    value: string
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException> {
    return pipe(this.unsafe, protocolSetter(value), this.setState);
  }

  get host(): string {
    return pipe(this.unsafe, hostGetter());
  }
  setHost(value: string): void {
    return pipe(this.unsafe, hostSetter(value), this.setState);
  }

  get hostname(): string {
    return pipe(this.unsafe, hostnameGetter());
  }
  setHostname(value: string): void {
    return pipe(this.unsafe, hostnameSetter(value), this.setState);
  }

  get port(): string {
    return pipe(this.unsafe, portGetter());
  }
  setPort(value: string): void {
    return pipe(this.unsafe, portSetter(value), this.setState);
  }

  get pathname(): string {
    return pipe(this.unsafe, pathnameGetter());
  }
  setPathname(value: string): void {
    return pipe(this.unsafe, pathnameSetter(value), this.setState);
  }

  get search(): string {
    return pipe(this.unsafe, searchGetter());
  }
  setSearch(value: string): void {
    return pipe(this.unsafe, searchSetter(value), this.setState);
  }

  get hash(): string {
    return pipe(this.unsafe, hashGetter());
  }
  setHash(value: string): void {
    return pipe(this.unsafe, hashSetter(value), this.setState);
  }

  assign(url: string): void {
    return pipe(this.unsafe, assignMethod(url), this.setState);
  }

  replace(url: string): void {
    return pipe(this.unsafe, replaceMethod(url), this.setState);
  }

  reload(): void {
    return pipe(this.unsafe, reloadMethod(), this.setState);
  }

  get ancestorOrigins(): DOMStringList {
    return pipe(this.unsafe, ancestorOriginsGetter());
  }
}

export const safeLocation: R.Reader<Location, SafeLocation> = (location) =>
  new SafeLocation(location);
