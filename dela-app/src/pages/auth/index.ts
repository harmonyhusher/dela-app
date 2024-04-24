import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';
import { routes } from "@src/app/routes";
import { Auth } from "./page";

export const currentRoute = routes.auth.auth;

export const AuthRoute = {
  view: Auth,
  route: currentRoute,
};
