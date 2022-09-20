export interface MHtmlNavigatorID {
  /** @deprecated Always returns `"Mozilla"`, in any browser. */
  readonly appCodeName: "Mozilla";
  /** @deprecated Always returns `"Netscape"`, in any browser. */
  readonly appName: "Netscape";
  /**
   * @deprecated Returns the version of the browser as a string. Do not rely on
   * this property to return the correct value.
   */
  readonly appVersion: string;
  /**
   * @deprecated Returns a string representing the platform of the browser. Do
   * not rely on this function to return a significant value.
   */
  readonly platform: string;
  /** @deprecated Always returns `"Gecko"`, in any browser. */
  readonly product: "Gecko";
  /** @deprecated Returns either the string `"20030107"`, or `"20100101"`. */
  readonly productSub: "20030107" | "20100101";
  readonly userAgent: string;
  /**
   * @deprecated Returns either an empty string, `"Apple Computer Inc."`, or
   * `"Google Inc."`.
   */
  readonly vendor: "" | "Apple Computer, Inc." | "Google Inc.";
  /** @deprecated Always returns an empty string. */
  readonly vendorSub: "";
}
