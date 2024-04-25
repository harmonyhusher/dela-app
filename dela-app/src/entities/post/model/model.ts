import { createMutation } from "@farfetched/core";
import { api } from "@src/shared/api";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";

import { createEvent, sample } from "effector";

interface IComment {
  id: number;
  comment: string;
}

export const commentPost = createMutation({
  handler: async ({ id, comment }: IComment) => {
    const response = await api.patch<IPost>(`posts/${id}/comment`, {
      text: comment,
    });
    return response.data;
  },
});

const sendComment = createEvent<IComment>();
const updateSinglePost = createEvent<IPost>();

sample({
  clock: sendComment,
  target: commentPost.start,
});

sample({
  clock: commentPost.finished.success,
  fn: (clk) => clk.result,
  target: updateSinglePost,
});

export { sendComment };
