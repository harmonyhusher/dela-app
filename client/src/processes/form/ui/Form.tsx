/* eslint-disable react/no-children-prop */
import React, { FormEventHandler } from "react";
import cs from "./Form.module.scss";
import { Input } from "@/src/shared/ui/input";
import { Button } from "@/src/shared/ui/button";
import { useUnit } from "effector-react";
import {
  $email,
  $error,
  $formDisabled,
  $password,
  emailChanged,
  formSubmitted,
  passwordChanged,
} from "../model/model";

export interface IAuthForm {
  email: string;
  password: string;
}

const Form = () => {
  const [email, password, submitForm, disabled, error] = useUnit([
    $email,
    $password,
    formSubmitted,
    $formDisabled,
    $error,
  ]);

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    submitForm();
  };

  const onEmailChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      emailChanged(e.target.value);
    },
    []
  );

  const onPasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      passwordChanged(e.target.value);
    },
    []
  );

  console.log(email, password, error);
  return (
    <form className={cs.container} onSubmit={onFormSubmit}>
      <Input
        value={email}
        onChange={onEmailChange}
        id="email"
        children={"Почта"}
        // disabled={disabled}
        type="email"
      />
      <Input
        value={password}
        onChange={onPasswordChange}
        id="password"
        // disabled={disabled}
        children={"Пароль"}
      />
      <Button type="submit" children={"Войти"} disabled={disabled} />
    </form>
  );
};

export default Form;
