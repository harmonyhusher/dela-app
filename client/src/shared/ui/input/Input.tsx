import { InputProps } from "@/src/shared/interfaces/ui/Input.interfaces";
import cs from "./Input.module.scss";
import cn from "classnames";

export const Input = ({ id, children, ...props }: InputProps) => {
  return (
    <label className={cs.label} htmlFor={id}>
      {children}
      <input className={cs.input} id={id} {...props} />
    </label>
  );
};
