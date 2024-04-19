import React from "react";
import { ButtonProps } from "@/src/shared/interfaces/ui/Buttom.interfaces";
import cs from "./Button.module.scss";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={cs.button} {...props}>
      {children}
    </button>
  );
};
