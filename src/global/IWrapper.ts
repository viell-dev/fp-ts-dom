// eslint-disable-next-line @typescript-eslint/ban-types -- allow {} here
export interface IWrapperConstructors<N extends {}> {
  new (native: N): IWrapper<N>;
}

// eslint-disable-next-line @typescript-eslint/ban-types -- allow {} here
export interface IWrapper<N extends {}> {
  getNative(): N;
}
