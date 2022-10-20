import * as S from "fp-ts/State";

export const assignMethod = (url: string): S.State<Location, void> =>
  S.gets((s) => s.assign(url));
