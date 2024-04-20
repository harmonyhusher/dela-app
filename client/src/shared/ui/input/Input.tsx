import { InputProps } from "@/src/shared/interfaces/ui/Input.interfaces";
import cs from "./Input.module.scss";
import cn from "classnames";
import { mainFont } from "../../fonts/MainFont";
import React from "react";

export const Input = ({ id, children, ...props }: InputProps) => {
  return (
    <React.Fragment>
      <label className={cn(cs.label, mainFont.className)} htmlFor={id}>
        {children}
      </label>
      <input className={cn(cs.input, mainFont.className)} id={id} {...props} />
    </React.Fragment>
  );
};
