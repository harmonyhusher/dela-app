import { redirect } from "atomic-router";
import { createEvent, createStore, sample, split } from "effector";
import { persist } from "effector-storage/local";
import { and } from "patronum";
import { routes } from "../routes";

const $token = createStore("");

const tokenRecieved = createEvent();
const tokenExpired = createEvent();
const initializeApp = createEvent();

$token.on(tokenRecieved, (_, token) => token).reset(tokenExpired);

const $isAuth = and($token);

persist({
  store: $token,
  key: "token",
  serialize: (v) => v,
  deserialize: (v) => v,
});

export { tokenExpired, tokenRecieved, $isAuth, $token, initializeApp };
