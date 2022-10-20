import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const searchGetter = () => R.asks((r: Location) => r.search);

export const searchSetter = (value: string) =>
  S.gets((s: Location) => {
    s.search = value;
  });
