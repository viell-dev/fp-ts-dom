import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const searchGetter = () => R.asks((r: Location) => r.search);

export const searchSetter = (value: string) =>
  S.gets((s: Location) => {
    s.search = value;
  });
