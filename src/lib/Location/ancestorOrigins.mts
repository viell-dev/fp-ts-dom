import * as R from "fp-ts/Reader";

export const ancestorOriginsGetter = () =>
  R.asks((r: Location) => r.ancestorOrigins);
