import type {
  InUseAttributeErrorDomException,
  NotFoundErrorDomException,
} from "@/exceptions/DomException.js";
import { Wrapper } from "@/globals/Wrapper.js";
import type { IDomAttr } from "@/specs/dom/interfaces/IDomAttr.js";
import type { IDomNamedNodeMap } from "@/specs/dom/interfaces/IDomNamedNodeMap.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomAttr } from "./DomAttr.js";

export class DomNamedNodeMap
  extends Wrapper<NamedNodeMap>
  implements IDomNamedNodeMap<NamedNodeMap>
{
  [index: number]: DomAttr;
  [
    qualifiedName: string extends keyof typeof DomNamedNodeMap ? never : string
  ]: DomAttr;

  private static indexHandler: ProxyHandler<DomNamedNodeMap> = {
    get(target, property) {
      if (typeof property === "string")
        return pipe(
          parseInt(property).toString() === property
            ? target.native.item(parseInt(property))
            : target.native.getNamedItem(property),
          O.fromPredicate((attr): attr is Attr => attr instanceof Attr),
          O.map((attr) => new DomAttr(attr)),
          O.toUndefined
        );
      return;
    },
  };

  constructor(namedNodeMap: NamedNodeMap) {
    super(namedNodeMap);

    return new Proxy(this, DomNamedNodeMap.indexHandler);
  }

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
      E.tryCatch(
        () => this.native.removeNamedItem(qualifiedName),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      )
    );
  }
  removeNamedItemNS(
    namespace: string | null,
    localName: string
  ): E.Either<NotFoundErrorDomException, DomAttr> {
    return pipe(
      [namespace, localName] as const,
      E.tryCatchK(
        (params) => this.native.removeNamedItemNS(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as NotFoundErrorDomException
      )
    );
  }
}
