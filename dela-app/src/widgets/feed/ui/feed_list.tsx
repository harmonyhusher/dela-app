import React, { useId } from "react";

import { useUnit } from "effector-react";

import { feedListQuery } from "../model/model";
import cs from "./list.module.scss";
import { Post } from "@src/entities/post/ui/post";

export const FeedList = () => {
  const { data: feedList, pending, error } = useUnit(feedListQuery);
  const id = useId();

  React.useEffect(() => {
    feedListQuery.start();
  }, []);

  if (pending) {
    return <div>Загрузка</div>;
  }

  if (error) {
    return <div>Ошибка</div>;
  }

  return (
    <div className={cs.container}>
      {feedList?.map((item) => {
        return (
          <Post key={id + item?.createdAt + item?.comments.length} {...item} />
        );
      })}
    </div>
  );
};
