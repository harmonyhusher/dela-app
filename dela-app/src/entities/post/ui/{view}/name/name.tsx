import React from 'react';

import cs from './name.module.scss';

type Props = {
  firstName: string;
  lastName: string;
};

export const Name = ({ firstName, lastName }: Props) => {
  return <p className={cs.container}>{firstName + ' ' + lastName}</p>;
};
