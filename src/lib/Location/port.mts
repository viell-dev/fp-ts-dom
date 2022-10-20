import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const portGetter = () => R.asks((r: Location) => r.port);

export const portSetter = (value: string) =>
  S.gets((s: Location) => {
    s.port = value;
  });
