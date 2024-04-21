import { IPost } from '@/interfaces/entities/Post.interface';
import { AxiosResponse } from 'axios';

import { api } from '../api';

// /* READ */
// router.get("/", verifyToken, getFeedPosts);
// router.get("/:userId/posts", getUserPosts);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);
// router.patch("/:id/comment", verifyToken, commentPost);

function getFeedPosts(): Promise<AxiosResponse<IPost, IPost>> {
  return api.get('/feed');
}

function getUserPosts(userId: number): Promise<AxiosResponse<IPost, IPost>> {
  return api.get('/:userId/posts');
}

export { getFeedPosts, getUserPosts };
