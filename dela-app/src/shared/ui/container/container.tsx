import cn from "classnames";

import cs from "./container.module.scss";

export enum Borders {
  Top = "top",
  Bottom = "bottom",
}

export const Container = ({
  children,
  className,
  borders,
}: React.PropsWithChildren<{
  className?: string;
  borders?: Borders | null;
}>) => {
  return (
    <div className={cn(cs.container, className, borders && cs[borders])}>
      {children}
    </div>
  );
};
