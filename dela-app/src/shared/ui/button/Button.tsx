import React from 'react';

import { ButtonProps } from '@shared/interfaces/ui/Button.interfaces';

import cn from 'classnames';

import { Loader } from '../loader';
import cs from './Button.module.scss';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, ...props }, ref) => {
    return (
      <button
        className={cn(
          cs.button,
          cs.disabled,
          { [cs.loading]: loading },
    )}
        ref={ref}
        {...props}
      >
        {loading ? <Loader/> : children}
      </button>
    );
  }
);
