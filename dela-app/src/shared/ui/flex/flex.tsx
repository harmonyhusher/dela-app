import { Align, Direction, Props } from "@shared/interfaces/ui/Flex.interfaces";
import cn from "classnames";

import cs from "./flex.module.scss";

export const Flex = ({
  align = Align.Center,
  direction = Direction.Row,
  children,
  className,
  style,
}: React.PropsWithChildren<Props>) => {
  console.log(align, direction);
  return (
    <div
      className={cn(cs.container, cs[align], [cs.direction], className)}
      style={style}
    >
      {children}
    </div>
  );
};
