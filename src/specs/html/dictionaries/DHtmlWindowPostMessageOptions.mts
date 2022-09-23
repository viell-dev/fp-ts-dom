import type { DHtmlStructuredSerializeOptions } from "./DHtmlStructuredSerializeOptions.mjs";

export interface DHtmlWindowPostMessageOptions
  extends DHtmlStructuredSerializeOptions {
  targetOrigin?: string;
}
