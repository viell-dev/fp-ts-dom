export const DomEventPhase = {
  NONE: 0,
  CAPTURING_PHASE: 1,
  AT_TARGET: 2,
  BUBBLING_PHASE: 3
} as const;

export type DomEventPhase = (typeof DomEventPhase)[keyof typeof DomEventPhase];
