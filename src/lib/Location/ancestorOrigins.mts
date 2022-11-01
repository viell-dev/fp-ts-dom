import * as R from "@/types/Reader.mjs";

export const ancestorOriginsGetter = () =>
  R.asks((r: Location) => r.ancestorOrigins);
