// eslint-disable-next-line @typescript-eslint/ban-types -- allow {} here
export interface ISerializable<T = {}> {
  toJSON(): T;
}
