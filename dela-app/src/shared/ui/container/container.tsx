import cn from 'classnames';

import cs from './container.module.scss';

export const Container = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return <div className={cn(cs.container, className)}>{children}</div>;
};
