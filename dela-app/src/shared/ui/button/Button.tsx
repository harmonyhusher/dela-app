import cn from "classnames";

import cs from "./Button.module.scss";
import { ButtonProps } from "@shared/interfaces/ui/Button.interfaces";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={cn(cs.button)} {...props}>
      {children}
    </button>
  );
};
