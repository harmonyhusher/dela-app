import {
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
  chainRoute,
  redirect,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { $isAuth } from "../../model";
import { and, not, or } from "patronum";
import { routes } from "../router";
import { $userData } from "@src/entities/user/api/query";

export function chainAuthorized<Params extends RouteParams>(
  route: RouteInstance<Params>
) {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

  const isAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  });

  const isNotAuthorized = sample({
    clock: checkSessionStarted,
    filter: not($isAuth),
  });

  redirect({
    clock: isNotAuthorized,
    route: routes.auth.auth,
  });

  sample({
    clock: checkSessionStarted,
    filter: or($isAuth, $userData.$succeeded),
    target: $userData.start,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [isAuthorized],
    cancelOn: [isNotAuthorized],
  });
}
