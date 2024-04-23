import { $token } from "@src/app/model";
import { auth } from "@src/processes/form/model/api";
import { IUser } from "@src/shared/interfaces/entities/User.interface";
import { createStore, sample } from "effector";
import { not } from "patronum";
import { userQuery } from "../api/query";

const $user = createStore<Pick<
  IUser,
  "friends" | "firstName" | "location" | "lastName"
> | null>(null);

sample({
  source: auth.finished.success,
  filter: not($token),
  fn: (clx) => clx.result.data.user,
});

sample({
  source: userQuery.finished.success,
  filter: not($token),
  fn: (clx) => clx.result,
});
