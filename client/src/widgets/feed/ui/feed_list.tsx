import { useUnit } from "effector-react";
import { feedListQuery } from "../model/model";
import { Post } from "@/src/entities/post/ui/post";
import React, { useId } from "react";

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
  console.log(feedList)

  return (
    <div>
      {feedList?.map((item) => {
        return <Post key={id} {...item} />;
      })}
    </div>
  );
};
