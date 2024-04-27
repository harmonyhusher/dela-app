import {
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
  chainRoute,
  redirect,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { $isAuth } from "../../model";
import { not } from "patronum";
import { routes } from "../router";

export function chainHome<Params extends RouteParams>(
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

  redirect({
    clock: isAuthorized,
    route: routes.private.feed,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [route.$isOpened],
  });
}
