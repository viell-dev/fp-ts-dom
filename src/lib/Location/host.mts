import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const hostGetter = () => R.asks((r: Location) => r.host);

export const hostSetter = (value: string) =>
  S.gets((s: Location) => {
    s.host = value;
  });
