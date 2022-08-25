import type { IHtmlMimeTypeArray } from "../interfaces/IHtmlMimeTypeArray.js";
import type { IHtmlPluginArray } from "../interfaces/IHtmlPluginArray.js";

export interface MHtmlNavigatorPlugins {
  readonly plugins: IHtmlPluginArray<PluginArray>;
  readonly mimeTypes: IHtmlMimeTypeArray<MimeTypeArray>;
  javaEnabled(): boolean;
  readonly pdfViewerEnabled: boolean;
}
