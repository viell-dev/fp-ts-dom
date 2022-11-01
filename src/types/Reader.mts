export interface Reader<R, A> {
  (r: R): A;
}

export const asks =
  <R, A>(f: (r: R) => A): Reader<R, A> =>
  (r) =>
    f(r);
