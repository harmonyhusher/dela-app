import { createMutation } from "@farfetched/core";
import { api } from "@src/shared/api";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { and, not } from "patronum";

export const commentPost = createMutation({
  handler: async ({ id, comment }) => {
    const response = await api.patch(`posts/${id}/comment`, { text: comment });
    return response.data;
  },
});

const sendComment = createEvent<{ id: number; comment: string }>();

const sendCommentFx = createEffect(commentPost.start);

sample({
  clock: sendComment,
  target: [sendCommentFx],
});

export { sendComment };
