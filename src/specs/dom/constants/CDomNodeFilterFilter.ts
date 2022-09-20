import type { Values } from "@/helpers/Values.js";

export const CDomNodeFilterFilter = {
  FILTER_ACCEPT: 1,
  FILTER_REJECT: 2,
  FILTER_SKIP: 3,
} as const;

export type CDomNodeFilterFilter = Values<typeof CDomNodeFilterFilter>;
