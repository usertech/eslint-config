import { ComponentType } from "react";

import { Foo, foo } from "./exports";

const bar = (): Foo => foo;

export type HOC<OuterProps extends {}, InnerProps extends {}> = (
  WrappedComponent: ComponentType<InnerProps>
) => ComponentType<OuterProps>;

export { bar };
