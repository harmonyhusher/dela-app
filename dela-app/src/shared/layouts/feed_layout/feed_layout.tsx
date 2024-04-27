import React from 'react';

import { Header } from '@src/shared/ui/header';

import cs from './layout.module.scss';

export const FeedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <body className={cs.container}>
      <Header />
      <div className={cs.content}>{children}</div>
    </body>
  );
};
