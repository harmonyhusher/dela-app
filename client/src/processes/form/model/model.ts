import { signIn } from "@/src/shared/api/auth";
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
  // filter: signInFx.pending.map((pending) => !pending), обычный вид записи
  filter: not($formDisabled), // применение патронума
  target: localSingInFx,
});

$error.reset(formSubmitted);
$error.on(localSingInFx.failData, (_, error) => error);

export {
  $email,
  $password,
  $formDisabled,
  emailChanged,
  formSubmitted,
  passwordChanged,
  signInFx,
};
