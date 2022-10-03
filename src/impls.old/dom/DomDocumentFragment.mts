import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type {
  IDomDocumentFragment,
  IDomDocumentFragmentConstructors,
} from "../../specs/dom/interfaces/IDomDocumentFragment.mjs";
import { DomDocumentFragmentBase } from "./DomDocumentFragmentBase.mjs";

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
