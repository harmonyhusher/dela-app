import { routes } from '@app/routes/router';
import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';

import { Feed } from './page';

export const currentRoute = routes.private.feed;

export const FeedRoute = {
  view: Feed,
  route: chainAuthorized(currentRoute),
};
