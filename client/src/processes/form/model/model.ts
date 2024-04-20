import { $token, tokenExpired, tokenRecieved } from "@/src/app/model";
import { SignInError, signIn } from "@/src/shared/api/auth";
import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { not, or } from "patronum";

const $email = createStore("");
const $password = createStore("");

const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();
const formSubmitted = createEvent();
const setError = createEvent<Error | null>();

const signInFx = createEffect(signIn);

const $pending = signInFx.pending;
const $error = createStore<Error | null>(null);
const $formDisabled = or($pending, $error);

$email.on(emailChanged, (_, value) => value);
$password.on(passwordChanged, (_, value) => value);

const localSingInFx = attach({ effect: signInFx }); //локальная копия эффекта

sample({
  clock: formSubmitted,
  source: { email: $email, password: $password },
  filter: not($formDisabled), // применение патронума
  target: localSingInFx,
});

sample({
  clock: localSingInFx.doneData,
  fn: (clk) => clk.data.token,
  target: tokenRecieved,
});

sample({
  clock: localSingInFx.fail,
  fn: (clk) => clk.error,
  target: setError,
});

$error.on(setError, (_, error) => error);

export {
  $email,
  $password,
  $formDisabled,
  $error,
  emailChanged,
  formSubmitted,
  passwordChanged,
  signInFx,
};
