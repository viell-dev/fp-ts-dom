export interface MHtmlCanvasState {
  // state
  save(): void;
  restore(): void;
  reset(): void;
  isContextLost(): boolean;
}
