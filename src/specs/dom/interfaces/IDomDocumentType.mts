import type { MDomChildNode } from "../mixins/MDomChildNode.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomDocumentType<N extends DocumentType>
  extends IDomNode<N>,
    MDomChildNode {
  readonly name: string;
  readonly publicId: string;
  readonly systemId: string;
}
