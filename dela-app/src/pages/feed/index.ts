import { chainAuthorized } from "@src/app/routes/chainAuthoirized";
import { Feed } from "./page";

import { routes } from "@app/routes/router";

export const currentRoute = routes.private.feed;

export const FeedRoute = {
  view: Feed,
  route: chainAuthorized(currentRoute),
};
