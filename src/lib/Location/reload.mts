import * as S from "fp-ts/State";

export const reloadMethod = (): S.State<Location, void> =>
  S.gets((s) => s.reload());
