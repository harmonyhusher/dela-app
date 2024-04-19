import { createEffect, createEvent, createStore } from "effector";

const $email = createStore("");
const $password = createStore("");

const $pending = createStore(false);
const $error = createStore(false);

const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();

const signInFx = createEffect();

export {
  $email,
  $password,
  $error,
  $pending,
  emailChanged,
  passwordChanged,
  signInFx,
};
