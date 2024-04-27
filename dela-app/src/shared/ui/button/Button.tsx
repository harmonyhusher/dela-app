import { ButtonProps } from '@shared/interfaces/ui/Button.interfaces';

import cn from 'classnames';

import cs from './Button.module.scss';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={cn(cs.button)} {...props}>
      {children}
    </button>
  );
};
