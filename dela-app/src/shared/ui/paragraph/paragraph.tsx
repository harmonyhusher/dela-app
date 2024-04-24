import React from "react";

import cs from "./paragraph.module.scss";
import cn from "classnames";

export type SizeVariant = "l" | "xl" | "s" | "m";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  title?: string;
  className?: string;
  size?: SizeVariant;
  tag?: React.ElementType;
}

export const Paragraph = ({
  title,
  className,
  children,
  size,
  tag: Tag = "p",
  ...props
}: TitleProps) => {
  return (
    <Tag
      className={cn(cs.title, className, size && cs[size as SizeVariant])}
      {...props}
    >
      {title || children}
    </Tag>
  );
};
