import * as S from "@/types/State.mjs";

export const reloadMethod = (): S.State<Location, void> =>
  S.gets((s) => s.reload());
