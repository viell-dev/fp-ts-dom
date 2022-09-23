import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";
import type { IHtmlStorage } from "../interfaces/IHtmlStorage.mjs";

export interface DHtmlStorageEventInit extends DDomEventInit {
  key?: string;
  oldValue?: string;
  newValue?: string;
  url?: string;
  storageArea?: Storage | IHtmlStorage<Storage>;
}
