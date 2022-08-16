import { Native } from "../helpers/Native.js";

export interface IDomConstructor<N extends Native, T = IDom<N>> {
  new (native: N): T;
}

export interface IDom<N extends Native> {
  getNative(): N;
}
