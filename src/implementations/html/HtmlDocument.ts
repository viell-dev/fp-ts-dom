import type { IHtmlDocument } from "@/specs/html/interfaces/IHtmlDocument.js";
import { DomDocumentBase } from "../dom/DomDocumentBase.js";

export class HtmlDocument
  extends DomDocumentBase<Document>
  implements IHtmlDocument<Document> {}
