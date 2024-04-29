import { routes } from '@src/app/routes';
import { chainAuthorized } from '@src/app/routes/chains/chainAuthoirized';
import { api } from '@src/shared/api';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';

import { createQuery } from '@farfetched/core';
import { chainRoute } from 'atomic-router';
import { createEffect } from 'effector';

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

const getAllUserInfoById = createEffect(async (userId: string) => {
  await Promise.allSettled([userFeed.start(userId), userByIdQuery.start(userId)]);
});

export const routeUserPage = chainRoute({
  route: chainAuthorized(routes.private.user),
  beforeOpen: {
    effect: getAllUserInfoById,
    mapParams: (params) => params.params.userId,
  },
});
