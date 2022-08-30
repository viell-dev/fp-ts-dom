export interface IWrapperConstructors<N extends {}> {
  new (native: N): IWrapper<N>;
}

export interface IWrapper<N extends {}> {
  getNative(): N;
}
