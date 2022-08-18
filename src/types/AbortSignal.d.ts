/* eslint eslint-comments/require-description: off */
/* eslint-disable no-var, eslint-comments/disable-enable-pair,
   @typescript-eslint/no-explicit-any */

// AbortSignal in lib.d.ts is missing abort and timeout methods.
export declare var AbortSignal: {
  prototype: AbortSignal;
  new (): AbortSignal;
  abort(reason?: any): AbortSignal;
  timeout(milliseconds: number): AbortSignal;
};
