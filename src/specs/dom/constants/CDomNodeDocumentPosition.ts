import type { Values } from "@/helpers/Values.js";

export const CDomNodeDocumentPosition = {
  DOCUMENT_POSITION_DISCONNECTED: 0x01,
  DOCUMENT_POSITION_PRECEDING: 0x02,
  DOCUMENT_POSITION_FOLLOWING: 0x04,
  DOCUMENT_POSITION_CONTAINS: 0x08,
  DOCUMENT_POSITION_CONTAINED_BY: 0x10,
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20,
} as const;

export type CDomNodeDocumentPosition = Values<typeof CDomNodeDocumentPosition>;
