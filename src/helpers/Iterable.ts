export interface Iterable<K, V> {
  entries(): Iterator<[K, V]>;
  forEach(
    callback: (currentValue: V, currentIndex?: K, listObj?: this) => void
  ): void;
  forEach<T>(
    callback: (currentValue: V, currentIndex?: K, listObj?: T) => void,
    thisArg: T
  ): void;
  keys(): Iterator<K>;
  values(): Iterator<V>;
}
