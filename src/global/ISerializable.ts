export interface ISerializable<T = {}> {
  toJSON(): T;
}
