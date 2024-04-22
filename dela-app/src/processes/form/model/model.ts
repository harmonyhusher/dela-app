import { tokenRecieved } from "@src/app/model";
import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { not, or } from "patronum";
import { auth } from "./api";
import { redirect } from "atomic-router";
import { authRoute } from "@src/pages/auth/page";
import { feedRoute } from "@src/pages/feed/page";

const $email = createStore<string>("");
const $password = createStore<string>("");

const emailChanged = createEvent<string>();
const passwordChanged = createEvent<string>();
const formSubmitted = createEvent();

$email.on(emailChanged, (_, value) => value);
$password.on(passwordChanged, (_, value) => value);

const $formDisabled = or(auth.$pending);

sample({
  clock: formSubmitted,
  source: { email: $email, password: $password },
  target: auth.start,
});

sample({
  clock: auth.finished.success,
  fn: (clk) => clk.result.data.token,
  target: tokenRecieved,
});

redirect({
  clock: auth.$succeeded,
  route: feedRoute,
});

export {
  $email,
  $password,
  $formDisabled,
  emailChanged,
  formSubmitted,
  passwordChanged,
};
