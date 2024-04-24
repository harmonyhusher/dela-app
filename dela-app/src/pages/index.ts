import { createRoutesView } from "atomic-router-react";
import { AuthRoute } from "./auth";
import { FeedRoute } from "./feed";
import { HomeRoute } from "./home";

export const Pages = createRoutesView({
  routes: [AuthRoute, FeedRoute, HomeRoute],
});
