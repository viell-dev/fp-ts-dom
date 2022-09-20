import type { ICssomMediaList } from "../interfaces/ICssomMediaList.mjs";

export interface DCssomCSSStyleSheetInit {
  baseURL?: string;
  media?: MediaList | ICssomMediaList<MediaList> | string;
  disabled?: boolean;
}
