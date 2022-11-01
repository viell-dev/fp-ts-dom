import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const portGetter = () => R.asks((r: Location) => r.port);

export const portSetter = (value: string) =>
  S.gets((s: Location) => {
    s.port = value;
  });
