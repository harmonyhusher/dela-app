import { routes } from '@app/routes/router';

import { routeUserPage } from './model/model';
import { User } from './page';

export const currentRoute = routes.private.user;

export const UserRoute = {
  view: User,
  route: routeUserPage,
};
