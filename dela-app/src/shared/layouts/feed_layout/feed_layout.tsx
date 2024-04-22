import React from "react";
import cs from './layout.module.scss'

export const FeedLayout = ({ children }: React.PropsWithChildren) => {
  return <body className={cs.container}>{children}</body>;
};

