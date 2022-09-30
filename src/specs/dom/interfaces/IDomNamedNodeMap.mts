import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type {
  InUseAttributeErrorDomException,
  NotFoundErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomAttr } from "./IDomAttr.mjs";

export interface IDomNamedNodeMap<N extends NamedNodeMap> extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IDomAttr<Attr>>;
  //[test: number]: IDomAttr<Attr>;
  getNamedItem(qualifiedName: string): O.Option<IDomAttr<Attr>>;
  //[qualifiedName: NotKeyOf<IDomNamedNodeMap<N>>]: IDomAttr<Attr>;
  getNamedItemNS(
    namespace: string | null,
    localName: string
  ): O.Option<IDomAttr<Attr>>;
  setNamedItem(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<InUseAttributeErrorDomException, O.Option<IDomAttr<Attr>>>;
  setNamedItemNS(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<InUseAttributeErrorDomException, O.Option<IDomAttr<Attr>>>;
  removeNamedItem(
    qualifiedName: string
  ): E.Either<NotFoundErrorDomException, IDomAttr<Attr>>;
  removeNamedItemNS(
    namespace: string | null,
    localName: string
  ): E.Either<NotFoundErrorDomException, IDomAttr<Attr>>;
}
