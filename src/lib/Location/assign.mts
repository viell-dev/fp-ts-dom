import * as S from "@/types/State.mjs";

export const assignMethod = (url: string): S.State<Location, void> =>
  S.gets((s) => s.assign(url));
