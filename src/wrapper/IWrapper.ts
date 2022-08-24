export interface IWrapperConstructors<N> {
  new (native: N): IWrapper<N>;
}

export interface IWrapper<N> {
  getNative(): N;
}
