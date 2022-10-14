import { flow, pipe } from "fp-ts/function";
import * as IO from "fp-ts/IO";
import * as RIO from "fp-ts/ReaderIO";

const genericReader = <T, K extends keyof T>(key: K): RIO.ReaderIO<T, T[K]> =>
  RIO.asks((unsafe) => unsafe[key]);

export const href2: RIO.ReaderIO<Location, string> = genericReader("href");

export const href: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.href)
);

export const origin: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.origin)
);

export const protocol: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.protocol)
);

export const host: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.host)
);

export const hostname: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.hostname)
);

export const port: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.port)
);

export const pathname: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.pathname)
);

export const search: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.search)
);

export const hash: RIO.ReaderIO<Location, string> = flow(
  IO.of,
  IO.map((location) => location.hash)
);

export const safeLocation = (location: Location) => () => ({
  href2: pipe(location, genericReader("href")),
  href: pipe(location, href),
  origin: pipe(location, origin),
  protocol: pipe(location, protocol),
  host: pipe(location, host),
  hostname: pipe(location, hostname),
  port: pipe(location, port),
  pathname: pipe(location, pathname),
  search: pipe(location, search),
  hash: pipe(location, hash),
});

const test = pipe(
  window.location,
  safeLocation,
  IO.map((l) => l.href)
);
test;
