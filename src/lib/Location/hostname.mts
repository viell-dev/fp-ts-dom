import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const hostnameGetter = () => R.asks((r: Location) => r.hostname);

export const hostnameSetter = (value: string) =>
  S.gets((s: Location) => {
    s.hostname = value;
  });
