import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";
import { and } from "patronum";

const $token = createStore("");

const tokenRecieved = createEvent();
const tokenExpired = createEvent();

$token.on(tokenRecieved, (_, token) => token).reset(tokenExpired);

export const $isAuth = and($token);

persist({
  store: $token,
  key: "token",
  serialize: (v) => v,
  deserialize: (v) => v,
});
