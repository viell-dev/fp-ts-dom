import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.js";
import { DomDocumentBase } from "./DomDocumentBase.js";

export class DomDocument
  extends DomDocumentBase<Document>
  implements IDomDocument<Document>
{
  constructor(document: Document) {
    super(document);
  }
}
