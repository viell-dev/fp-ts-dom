import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomDocumentFragment,
  IDomDocumentFragmentConstructors,
} from "@/specs/dom/interfaces/IDomDocumentFragment.js";
import { DomDocumentFragmentBase } from "./DomDocumentFragmentBase.js";

@StaticImplements<IDomDocumentFragmentConstructors>()
export class DomDocumentFragment
  extends DomDocumentFragmentBase<DocumentFragment>
  implements IDomDocumentFragment<DocumentFragment>
{
  constructor();
  constructor(documentFragment: DocumentFragment);
  constructor(documentFragment?: DocumentFragment) {
    const nativeDocumentFragment =
      documentFragment instanceof DocumentFragment
        ? documentFragment
        : new DocumentFragment();

    super(nativeDocumentFragment);
  }
}
