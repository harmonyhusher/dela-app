import { tokenRecieved } from "@src/app/model";
import {
  createEvent,
  createStore,
  sample,
} from "effector";
import { or } from "patronum";
import { auth } from "./api";

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

export {
  $email,
  $password,
  $formDisabled,
  emailChanged,
  formSubmitted,
  passwordChanged,
};
