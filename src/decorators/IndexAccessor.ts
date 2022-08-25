/* eslint eslint-comments/require-description: off */

// This might allow [index: number]: any access.
export function IndexAccessor(clazz: { prototype: unknown }): void {
  const classHandler = Object.create(null);

  classHandler.construct = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Function,
    argumentsList: ArrayLike<unknown>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    newTarget?: Function
  ): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const instance = Reflect.construct(target, argumentsList, newTarget);
    const instanceHandler = Object.create(null);

    const get = Object.getOwnPropertyDescriptor(
      clazz.prototype,
      "indexAccessor"
    );
    if (get) {
      instanceHandler.get = (
        target: object,
        name: PropertyKey,
        receiver?: unknown
      ): unknown => {
        const exists = Reflect.has(target, name);

        if (exists) {
          return Reflect.get(target, name, receiver);
        } else {
          return get.value.call(target, name);
        }
      };
    }
  };
}
