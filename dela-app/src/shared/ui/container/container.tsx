import cn from "classnames";

import cs from "./container.module.scss";

export enum Borders {
  Top = "top",
  Bottom = "bottom",
  Null = "null",
  All = "all",
}

export const Container = ({
  children,
  className,
  borders = Borders.All,
}: React.PropsWithChildren<{
  className?: string;
  borders?: Borders;
}>) => {
  return (
    <div className={cn(cs.container, className, cs[borders as Borders])}>
      {children}
    </div>
  );
};
