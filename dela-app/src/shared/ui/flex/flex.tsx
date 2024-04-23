import { Align, Direction, Props } from '@shared/interfaces/ui/Flex.interfaces';
import cn from 'classnames';

import cs from './flex.module.scss';

export const Flex = ({
  align = Align.Center,
  direction = Direction.Row,
  children,
  className,
  style,
}: React.PropsWithChildren<Props>) => {
  return (
    <div className={cn(cs.container, { [cs.direction]: direction }, { [cs.align]: align }, className)} style={style}>
      {children}
    </div>
  );
};
