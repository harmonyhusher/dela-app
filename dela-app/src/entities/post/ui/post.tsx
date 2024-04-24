import React from "react";

import cn from "classnames";

import cs from "./post.module.scss";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";
import { Container } from "@src/shared/ui/container";
import { Flex } from "@src/shared/ui/flex";
import { Comments } from "@src/widgets/comments";
import { CommentPost } from "@src/processes/comment_post";
import { Wrapper } from "@src/shared/ui/wrapper";
import { Avatar } from "@src/widgets/avatar/avatar";
import { Name } from "@src/widgets/name/name";

export const Post = ({
  firstName,
  lastName,
  userId,
  description,
  comments,
  likes,
  createdAt,
}: Partial<IPost>) => {
  return (
    <Wrapper className={cn(cs.wrapper)}>
      <Container className={cn(cs.container)}>
        <Flex className={cs.name_container}>
          <Avatar
            firstName={firstName || ""}
            lastName={lastName || ""}
            userId={userId as string}
          />
          <Name firstName={firstName || ""} lastName={lastName || ""} />
        </Flex>
        <span>{description}</span>
        {/* <Comments comments={comments || []} /> */}
      </Container>
      <CommentPost />
    </Wrapper>
  );
};
