import type { IHtmlMimeTypeArray } from "../interfaces/IHtmlMimeTypeArray.mjs";
import type { IHtmlPluginArray } from "../interfaces/IHtmlPluginArray.mjs";

export interface MHtmlNavigatorPlugins {
  readonly plugins: IHtmlPluginArray<PluginArray>;
  readonly mimeTypes: IHtmlMimeTypeArray<MimeTypeArray>;
  javaEnabled(): boolean;
  readonly pdfViewerEnabled: boolean;
}
