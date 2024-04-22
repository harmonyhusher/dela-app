import { routes } from "@app/routes/router";
import { chainHome } from "@src/app/routes/chains/chainHome";
import { Home } from "./page";

export const currentRoute = routes.home;

export const FeedRoute = {
  view: Home,
  route: chainHome(currentRoute),
};
