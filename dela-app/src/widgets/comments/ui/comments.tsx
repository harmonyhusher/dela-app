import React from "react";

import { IPost } from "@src/shared/interfaces/entities/Post.interface";
import { Comment } from "@src/entities/comment/ui/comment";

export const Comments = ({ comments }: Pick<IPost, "comments">) => {
  return (
    <>
      {comments?.map((item) => {
        return <Comment key={String(item.createdAt)} {...item} />;
      })}
    </>
  );
};
