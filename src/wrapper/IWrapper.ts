import { Native } from "../helpers/Native.js";

export interface IWrapperConstructors<N extends Native> {
  new (native: N): IWrapper<N>;
}

export interface IWrapper<N extends Native> {
  getNative(): N;
}
