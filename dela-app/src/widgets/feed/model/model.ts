import { createQuery } from "@farfetched/core";
import { api } from "@src/shared/api";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";

// /* READ */
// router.get("/feed", verifyToken, getFeedPosts);
// router.get("/:userId/posts", getUserPosts);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);
// router.patch("/:id/comment", verifyToken, commentPost);

export const feedListQuery = createQuery({
  handler: async () => {
    const response = await api.get<IPost[]>("/posts/feed");

    return response.data;
  },
});
