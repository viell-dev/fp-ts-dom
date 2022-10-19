import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const getHost = () => R.asks((r: Location) => r.host);

export const setHost = (value: string) =>
  S.gets((s: Location) => {
    s.host = value;
  });
