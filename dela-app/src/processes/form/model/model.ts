import { $isAuth, $token, tokenRecieved } from "@src/app/model";
import { createEvent, createStore, sample } from "effector";
import { not, or } from "patronum";
import { auth } from "./api";
import { redirect } from "atomic-router";
import { routes } from "@src/app/routes";

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

const isAuthorized = sample({
  clock: $token,
  filter: not($isAuth),
});

redirect({
  clock: isAuthorized,
  route: routes.private.feed,
});

export {
  $email,
  $password,
  $formDisabled,
  emailChanged,
  formSubmitted,
  passwordChanged,
};
