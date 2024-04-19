import React from "react";
import { ButtonProps } from "@/src/shared/interfaces/ui/Buttom.interfaces";
import cs from "./Button.module.scss";
import cn from "classnames";
import { mainFont } from "../../fonts/MainFont";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={cn(cs.button, mainFont.className)} {...props}>
      {children}
    </button>
  );
};
