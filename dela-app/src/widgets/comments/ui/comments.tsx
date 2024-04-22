import React from "react";

import cs from "./comments.module.scss";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";
import { Container } from "@src/shared/ui/container";
import { Comment } from "@src/entities/comment/ui/comment";

export const Comments = ({ comments }: Pick<IPost, "comments">) => {
  if (!comments.length) return <></>;

  return (
    <Container className={cs.container}>
      {comments?.map((item) => {
        return <Comment key={String(item.createdAt)} {...item} />;
      })}
    </Container>
  );
};
