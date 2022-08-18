import { Native } from "../helpers/Native.js";

export interface IDomConstructor<N extends Native> {
  new (native: N): IDom<N>;
}

export interface IDom<N extends Native> {
  getNative(): N;
}
