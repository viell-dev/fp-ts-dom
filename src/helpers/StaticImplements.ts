export function StaticImplements<T extends new (...args: unknown[]) => void>() {
  return <U extends T>(ctor: U): void => {
    ctor;
  };
}
