import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/types/DomException.mjs";
import type * as R from "@/types/Reader.mjs";
import { Safe } from "@/types/Safe.mjs";
import type * as E from "@fp-ts/data/Either";
import { pipe } from "@fp-ts/data/Function";
import type * as O from "@fp-ts/data/Option";
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
    return pipe(this.unsafeState, hrefGetter());
  }
  setHref(value: string): O.Option<TypeError> {
    return pipe(this.unsafeState, hrefSetter(value), this.setState);
  }

  get origin(): E.Either<SecurityErrorDomException, string> {
    return pipe(this.unsafeState, originGetter());
  }

  get protocol(): E.Either<SecurityErrorDomException, string> {
    return pipe(this.unsafeState, protocolGetter());
  }
  setProtocol(
    value: string
  ): O.Option<SecurityErrorDomException | SyntaxErrorDomException> {
    return pipe(this.unsafeState, protocolSetter(value), this.setState);
  }

  get host(): string {
    return pipe(this.unsafeState, hostGetter());
  }
  setHost(value: string): void {
    return pipe(this.unsafeState, hostSetter(value), this.setState);
  }

  get hostname(): string {
    return pipe(this.unsafeState, hostnameGetter());
  }
  setHostname(value: string): void {
    return pipe(this.unsafeState, hostnameSetter(value), this.setState);
  }

  get port(): string {
    return pipe(this.unsafeState, portGetter());
  }
  setPort(value: string): void {
    return pipe(this.unsafeState, portSetter(value), this.setState);
  }

  get pathname(): string {
    return pipe(this.unsafeState, pathnameGetter());
  }
  setPathname(value: string): void {
    return pipe(this.unsafeState, pathnameSetter(value), this.setState);
  }

  get search(): string {
    return pipe(this.unsafeState, searchGetter());
  }
  setSearch(value: string): void {
    return pipe(this.unsafeState, searchSetter(value), this.setState);
  }

  get hash(): string {
    return pipe(this.unsafeState, hashGetter());
  }
  setHash(value: string): void {
    return pipe(this.unsafeState, hashSetter(value), this.setState);
  }

  assign(url: string): void {
    return pipe(this.unsafeState, assignMethod(url), this.setState);
  }

  replace(url: string): void {
    return pipe(this.unsafeState, replaceMethod(url), this.setState);
  }

  reload(): void {
    return pipe(this.unsafeState, reloadMethod(), this.setState);
  }

  get ancestorOrigins(): DOMStringList {
    return pipe(this.unsafeState, ancestorOriginsGetter());
  }
}

export const safeLocation: R.Reader<Location, SafeLocation> = (location) =>
  new SafeLocation(location);
