import * as S from "@/types/State.mjs";

export const replaceMethod = (url: string): S.State<Location, void> =>
  S.gets((s) => s.replace(url));
