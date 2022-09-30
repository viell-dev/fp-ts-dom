import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type {
  InUseAttributeErrorDomException,
  NotFoundErrorDomException,
} from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { IDomAttr } from "../../specs/dom/interfaces/IDomAttr.mjs";
import type { IDomNamedNodeMap } from "../../specs/dom/interfaces/IDomNamedNodeMap.mjs";
import { DomAttr } from "./DomAttr.mjs";

export class DomNamedNodeMap
  extends Wrapper<NamedNodeMap>
  implements IDomNamedNodeMap<NamedNodeMap>
{
  get length(): number {
    return this.native.length;
  }
  item(index: number): O.Option<DomAttr> {
    return pipe(
      O.fromNullable(this.native.item(index)),
      O.map((attr) => new DomAttr(attr))
    );
  }
  getNamedItem(qualifiedName: string): O.Option<DomAttr> {
    return pipe(
      O.fromNullable(this.native.getNamedItem(qualifiedName)),
      O.map((attr) => new DomAttr(attr))
    );
  }
  getNamedItemNS(
    namespace: string | null,
    localName: string
  ): O.Option<DomAttr> {
    return pipe(
      [namespace, localName] as const,
      O.fromNullableK((params) => this.native.getNamedItemNS(...params)),
      O.map((attr) => new DomAttr(attr))
    );
  }
  setNamedItem(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<InUseAttributeErrorDomException, O.Option<DomAttr>> {
    return pipe(
      attr instanceof Attr ? attr : attr.getNative(),
      E.tryCatchK(
        (attr) => this.native.setNamedItem(attr),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InUseAttributeErrorDomException
      ),
      E.map((attr) =>
        pipe(
          O.fromNullable(attr),
          O.map((attr) => new DomAttr(attr))
        )
      )
    );
  }
  setNamedItemNS(
    attr: Attr | IDomAttr<Attr>
  ): E.Either<InUseAttributeErrorDomException, O.Option<DomAttr>> {
    return pipe(
      attr instanceof Attr ? attr : attr.getNative(),
      E.tryCatchK(
        (attr) => this.native.setNamedItemNS(attr),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as InUseAttributeErrorDomException
      ),
      E.map((attr) =>
        pipe(
          O.fromNullable(attr),
          O.map((attr) => new DomAttr(attr))
        )
      )
    );
  }
  removeNamedItem(
    qualifiedName: string
  ): E.Either<NotFoundErrorDomException, DomAttr> {
    return pipe(
      tuple(qualifiedName),
      E.tryCatchK(
        tupled(this.native.removeNamedItem),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      ),
      E.map((attr) => new DomAttr(attr))
    );
  }
  removeNamedItemNS(
    namespace: string | null,
    localName: string
  ): E.Either<NotFoundErrorDomException, DomAttr> {
    return pipe(
      tuple(namespace, localName),
      E.tryCatchK(
        tupled(this.native.removeNamedItemNS),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      ),
      E.map((attr) => new DomAttr(attr))
    );
  }
}
