export interface ISerializable<T = unknown> {
  toJSON(): T;
}
