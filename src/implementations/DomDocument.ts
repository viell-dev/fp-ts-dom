import { IDomDocument } from "../interfaces/IDomDocument.js";

export class DomDocument
  extends DomDocumentBase<Document>
  implements IDomDocument<Document>
{
  constructor(document: Document) {
    super(document);
  }
}
