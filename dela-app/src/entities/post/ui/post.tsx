import React from "react";

import cn from "classnames";

import { Avatar } from "./{view}/avatar/avatar";
import { Name } from "./{view}/name/name";
import cs from "./post.module.scss";
import { IPost } from "@src/shared/interfaces/entities/Post.interface";
import { Container } from "@src/shared/ui/container";
import { Flex } from "@src/shared/ui/flex";
import { Comments } from "@src/widgets/comments";

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
    <div>
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
      </Container>
      <Comments comments={comments || []} />
    </div>
  );
};
