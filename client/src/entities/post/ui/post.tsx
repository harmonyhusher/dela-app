import { IPost } from "@/interfaces/entities/Post.interface";
import React from "react";
import cs from "./post.module.scss";
import cn from "classnames";
import { mainFont } from "@/src/shared/fonts/MainFont";

export const Post = ({
  firstName,
  lastName,
  userId,
  description,
  comments,
  likes,
  date,
}: Partial<IPost>) => {
  return (
    <div className={cn(cs.container, mainFont.className)}>
      <section>
        <div>
          {firstName?.[0]}
          {lastName?.[0]}
        </div>
        <p>{firstName && lastName && firstName + lastName}</p>
      </section>
      <span>{description}</span>
    </div>
  );
};
