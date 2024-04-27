import React from "react";
import cs from "./layout.module.scss";
import { Header } from "@src/shared/ui/header";

export const FeedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <body className={cs.container}>
      <Header />
      <div className={cs.content}>{children}</div>
    </body>
  );
};
