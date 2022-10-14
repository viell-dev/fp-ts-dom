import * as E from "fp-ts/Either";
import * as O from "fp-ts/Option";
import type * as Re from "fp-ts/Reader";

const getter = <N, K extends keyof N>(native: N, key: K): { get(): N[K] } => ({
  get: () => native[key],
});
const setter = <N, K extends keyof N>(
  native: N,
  key: K
): { set(value: N[K]): void } => ({
  set: (value: N[K]): void => {
    native[key] = value;
  },
});

const getterAndSetter = <N, K extends keyof N>(
  native: N,
  key: K
): {
  get(): N[K];
  set(value: N[K]): void;
} => Object.assign(getter(native, key), setter(native, key));

const nameRW: {
  get: Re.Reader<Window, string>;
  set: (native: Window, value: string) => void;
} = {
  get: (native) => native.name,
  set: (native, value) => {
    native.name = value;
  },
};

export const nameGS = (wrapped: { native: Window }): { name: string } => {
  const gs = getterAndSetter(wrapped.native, "name");

  return {
    get name(): string {
      return gs.get();
    },
    set name(value: string) {
      gs.set(value);
    },
  };
};

export const name = (safe: { native: Window }): { name: string } => ({
  get name(): string {
    return nameRW.get(safe.native);
  },
  set name(value: string) {
    nameRW.set(safe.native, value);
  },
});

export const name2 = (safe: {
  native: Window;
}): { readonly name: string; setName(value: string): O.Option<Error> } => ({
  get name(): string {
    return nameRW.get(safe.native);
  },
  setName(value: string): O.Option<Error> {
    return O.getLeft(
      E.tryCatch(
        () => nameRW.set(safe.native, value),
        (error) => (error instanceof Error ? error : new Error(String(error)))
      )
    );
  },
});
