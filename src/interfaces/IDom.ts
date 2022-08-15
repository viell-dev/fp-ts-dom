export interface IDomConstructor<T> {
  new (native: T): IDom<T>;
}

export interface IDom<T> {
  getNative(): T;
}
