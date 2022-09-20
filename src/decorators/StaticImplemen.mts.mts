export function StaticImplements<T>() {
  return <U extends T>(ctor: U): void => {
    ctor;
  };
}
