import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const hashGetter = () => R.asks((r: Location) => r.hash);

export const hashSetter = (value: string) =>
  S.gets((s: Location) => {
    s.hash = value;
  });
