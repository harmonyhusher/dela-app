import React, { useId } from "react";

import { useUnit } from "effector-react";

import { feedQuery } from "../model/model";
import cs from "./list.module.scss";
import { Post } from "@src/entities/post/ui/post";

export const FeedList = () => {
  const { data, pending } = useUnit({
    data: feedQuery.$data,
    pending: feedQuery.$pending,
  });

  if (pending) {
    return <div>Загрузка</div>;
  }

  return (
    <div className={cs.container}>
      {data?.map((item) => {
        return (
          <Post
            key={item?.userId + item?.createdAt + item?.comments.length}
            {...item}
          />
        );
      })}
    </div>
  );
};
