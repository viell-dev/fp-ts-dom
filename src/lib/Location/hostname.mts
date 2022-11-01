import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const hostnameGetter = () => R.asks((r: Location) => r.hostname);

export const hostnameSetter = (value: string) =>
  S.gets((s: Location) => {
    s.hostname = value;
  });
