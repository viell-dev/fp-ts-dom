import * as S from "fp-ts/State";

export const replaceMethod = (url: string): S.State<Location, void> =>
  S.gets((s) => s.replace(url));
