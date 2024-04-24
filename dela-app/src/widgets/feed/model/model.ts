import { cache, createCacheAdapter, createQuery } from "@farfetched/core";
import { router, routes } from "@src/app/routes";
import { currentRoute } from "@src/pages/feed";
import { api } from "@src/shared/api";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";
import { chainRoute } from "atomic-router";
import { combine, createEffect, createStore, sample } from "effector";
import { debounce } from "patronum";

// /* READ */
// router.get("/feed", verifyToken, getFeedPosts);
// router.get("/:userId/posts", getUserPosts);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);
// router.patch("/:id/comment", verifyToken, commentPost);

const $page = createStore(0);
const $search = createStore("");

export const $filters = combine($page, $search, (page, search) => {
  return {
    page,
    search,
  };
});

export const feedQuery = createQuery({
  handler: async () => {
    const response = await api.get<IPost[]>("/posts/feed");

    return response.data;
  },
});

const getFeedFx = createEffect(feedQuery.start);

debounce({
  source: $filters,
  target: getFeedFx,
  timeout: 300,
});

chainRoute({
  route: routes.private.feed,
  beforeOpen: getFeedFx,
});
