import { routes } from '@app/routes/router';
import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';

import { User } from './page';

export const currentRoute = routes.private.user;

export const UserRoute = {
  view: User,
  route: chainAuthorized(currentRoute),
};
