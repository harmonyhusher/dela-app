import React from 'react';

import { ButtonProps } from '@/src/shared/interfaces/ui/Button.interfaces';
import cn from 'classnames';

import { mainFont } from '../../fonts/MainFont';
import cs from './Button.module.scss';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={cn(cs.button, mainFont.className)} {...props}>
      {children}
    </button>
  );
};
