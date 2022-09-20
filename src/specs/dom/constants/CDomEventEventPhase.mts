import type { Values } from "@/helpers/Values.mjs";

export const CDomEventEventPhase = {
  NONE: 0,
  CAPTURING_PHASE: 1,
  AT_TARGET: 2,
  BUBBLING_PHASE: 3,
} as const;

export type CDomEventEventPhase = Values<typeof CDomEventEventPhase>;
