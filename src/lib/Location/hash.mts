import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const hashGetter = () => R.asks((r: Location) => r.hash);

export const hashSetter = (value: string) =>
  S.gets((s: Location) => {
    s.hash = value;
  });
