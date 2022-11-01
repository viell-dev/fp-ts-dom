import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const hostGetter = () => R.asks((r: Location) => r.host);

export const hostSetter = (value: string) =>
  S.gets((s: Location) => {
    s.host = value;
  });
