import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";

export const pathnameGetter = () => R.asks((r: Location) => r.pathname);

export const pathnameSetter = (value: string) =>
  S.gets((s: Location) => {
    s.pathname = value;
  });
