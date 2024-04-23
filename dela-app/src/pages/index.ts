import { createRoutesView } from "atomic-router-react";
import { AuthRoute } from "./auth";
import { FeedRoute } from "./feed";

export const Pages = createRoutesView({
  routes: [AuthRoute, FeedRoute],
});
