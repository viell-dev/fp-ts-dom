export interface Nil {
  readonly _tag: "Nil";
}

export interface Cons<A> {
  readonly _tag: "Cons";
  readonly head: A;
  readonly tail: List<A>;
}

export type List<A> = Nil | Cons<A>;

export const nil: Nil = { _tag: "Nil" };

export const cons = <A extends unknown>(head: A, tail: List<A>): Cons<A> => ({
  _tag: "Cons",
  head,
  tail,
});

export const isNil = <A extends unknown>(list: List<A>): list is Nil =>
  list._tag === "Nil";

export const isCons = <A extends unknown>(list: List<A>): list is Cons<A> =>
  list._tag === "Cons";

export const fromArray = <A extends unknown>(as: Array<A>): List<A> => {
  if (as.length === 0) {
    return nil;
  }
  const [head, ...tail] = as as [A, ...Array<A>];
  return cons(head, fromArray(tail));
};

export const toArray = <A extends unknown>(list: List<A>): Array<A> => {
  switch (list._tag) {
    case "Nil":
      return [];
    case "Cons":
      return [list.head, ...toArray(list.tail)];
  }
};

export const of = <A extends unknown>(a: A): List<A> => cons(a, nil);

export const map = <A, B>(f: (a: A) => B) => {
  return (self: List<A>): List<B> => {
    if (isNil(self)) {
      return self as unknown as List<B>;
    } else {
      const h = { _tag: "Cons", head: f(self.head), tail: nil as List<B> };
      let t = h;
      let rest = self.tail;
      while (!isNil(rest)) {
        const nx = cons(f(rest.head), nil);
        t.tail = nx;
        t = nx;
        rest = rest.tail;
      }
      return h as List<B>;
    }
  };
};
