/* eslint-disable react/no-children-prop */
import React from "react";
import cs from "./Form.module.scss";
import { Input } from "@/src/shared/ui/input";
import { Button } from "@/src/shared/ui/button";
import { useUnit } from "effector-react";
import {
  $email,
  $error,
  $password,
  $pending,
  emailChanged,
  passwordChanged,
  signInFx,
} from "../model/store";

export interface IAuthForm {
  email: string;
  password: string;
}

const Form = () => {
  const [email, password, submitForm, loading] = useUnit([
    $email,
    $password,
    signInFx,
    $pending,
    $error,
  ]);
  return (
    <form className={cs.container} onSubmit={submitForm}>
      <Input
        value={email}
        onChange={(e) => emailChanged(e.target.value)}
        id="email"
        children={"Почта"}
        type="email"
      />
      <Input
        value={password}
        onChange={(e) => passwordChanged(e.target.value)}
        id="password"
        children={"Пароль"}
      />
      <Button type="submit" children={"Войти"} disabled={loading} />
    </form>
  );
};

export default Form;
