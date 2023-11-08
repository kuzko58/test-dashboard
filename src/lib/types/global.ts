export type ObjectMap<T, V = string> = {
  [P in keyof T]?: V;
};

export type FormTarget = EventTarget & HTMLFormElement;
export type FormEvent = MouseEvent & { currentTarget: FormTarget };
export type FunctionT<ArgsT extends unknown[] = [], ReturnT = void> = (
  ...args: ArgsT
) => ReturnT;
export type OptionalT<PropT, FallbackT = undefined> = PropT | FallbackT;
