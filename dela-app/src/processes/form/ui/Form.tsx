import React, { FormEventHandler } from 'react';

import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Button } from '@src/shared/ui/button';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';
import { Input } from '@src/shared/ui/input';

import { useUnit } from 'effector-react';

import { $email, $formDisabled, $password, emailChanged, formSubmitted, passwordChanged } from '../model/model';
import cs from './Form.module.scss';

export interface IAuthForm {
  email: string;
  password: string;
}

export const Form = () => {
  const [email, password, submitForm, disabled] = useUnit([$email, $password, formSubmitted, $formDisabled]);

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    submitForm();
  };

  const onEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    emailChanged(e.target.value);
  }, []);

  const onPasswordChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    passwordChanged(e.target.value);
  }, []);

  return (
    <Container className={cs.container}>
      <form onSubmit={onFormSubmit}>
        <Flex direction={Direction.Column}>
          <Input
            children={'Почта'}
            id="email"
            onChange={onEmailChange}
            type="email"
            // disabled={disabled}
            value={email}
          />
          <Input
            children={'Пароль'}
            id="password"
            onChange={onPasswordChange}
            // disabled={disabled}
            value={password}
          />
        </Flex>
        <Button children={'Войти'} disabled={disabled} type="submit" />
      </form>
    </Container>
  );
};
