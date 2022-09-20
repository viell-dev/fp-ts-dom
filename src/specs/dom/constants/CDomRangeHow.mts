import type { Values } from "@/helpers/Values.mjs";

export const CDomRangeHow = {
  START_TO_START: 0,
  START_TO_END: 1,
  END_TO_END: 2,
  END_TO_START: 3,
} as const;

export type CDomRangeHow = Values<typeof CDomRangeHow>;
