import { InputProps } from "@shared/interfaces/ui/Input.interfaces";
import cn from "classnames";
import cs from "./Input.module.scss";

export const Input = ({ id, children, ...props }: InputProps) => {
  return (
    <span className={cs.container}>
      <label className={cn(cs.label)} htmlFor={id}>
        {children}
      </label>
      <label className={cs.input_container}>
        <input className={cn(cs.input)} id={id} {...props} />
      </label>
    </span>
  );
};
