import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const pathnameGetter = () => R.asks((r: Location) => r.pathname);

export const pathnameSetter = (value: string) =>
  S.gets((s: Location) => {
    s.pathname = value;
  });
