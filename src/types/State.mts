export interface State<S, A> {
  (s: S): [A, S];
}

export const gets =
  <S, A>(f: (s: S) => A): State<S, A> =>
  (s) =>
    [f(s), s];
