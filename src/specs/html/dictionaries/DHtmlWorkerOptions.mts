import type { EHtmlWorkerType } from "../enums/EHtmlWorkerType.mjs";

export interface DHtmlWorkerOptions {
  type?: EHtmlWorkerType;
  credentials?: RequestCredentials; // Fetch spec is out-of-scope.
  name?: string;
}
