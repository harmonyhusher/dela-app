import { routes } from '@src/app/routes';
import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';
import { userQuery } from '@src/entities/user/api/query';
import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createQuery } from '@farfetched/core';
import { chainRoute } from 'atomic-router';
import { sample } from 'effector';
import { and } from 'patronum';

export const userFeed = createQuery({
  handler: async (userId: string) => {
    const response = await api.get<IPost[]>(`posts/${userId}/posts`);

    return response.data;
  },
});

export const userByIdQuery = createQuery({
  handler: async (userId: string) => {
    const response = await api.get<IPost[]>(`users/${userId}`);

    return response.data;
  },
});

// const getAllInfoById = sample({
//   source: routes.private.user.opened,
//   fn: (params) => params.params.userId,
//   target: [userFeed.start, userByIdQuery.start],
// });

// export const routeUserPage = chainRoute({
//   route: chainAuthorized(routes.private.user),
//   beforeOpen: getAllInfoById,
// });
