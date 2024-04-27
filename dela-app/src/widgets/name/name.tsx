import React from 'react';

import cn from 'classnames';

import cs from './name.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  isLoading?: boolean;
};

export const Name = ({ firstName, lastName, isLoading }: Props) => {
  return (
    <p className={cn(cs.container, isLoading && cs.isLoading)}>
      {firstName + ' ' + lastName}
    </p>
  );
};
