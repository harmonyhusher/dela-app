// import { $isAuth } from "@src/app/model";
// import {
//   RouteInstance,
//   RouteParams,
//   RouteParamsAndQuery,
//   chainRoute,
//   redirect,
// } from "atomic-router";
// import { createEvent, sample } from "effector";
// import { not } from "patronum";
// import { routes } from "../router";

// export function chainAuthorized<Params extends RouteParams>(
//   route: RouteInstance<Params>
// ) {
//   const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

//   const isAuthorized = sample({
//     clock: checkSessionStarted,
//     filter: $isAuth,
//   });

//   redirect({
//     clock: not($isAuth),
//     route: routes.auth.auth,
//   });

//   sample({
//     clock: checkSessionStarted,
//     filter: or($isAuth, $userData.$succeeded),
//     target: $userData.start,
//   });

//   return chainRoute({
//     route,
//     beforeOpen: checkSessionStarted,
//     openOn: [isAuthorized],
//     //   cancelOn: [isNotAuthorized],
//   });
// }
