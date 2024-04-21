import React, { useId } from 'react';

import { Post } from '@/entities/post/ui/post';
import { useUnit } from 'effector-react';

import { feedListQuery } from '../model/model';
import cs from './list.module.scss';

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
  console.log(feedList);

  return (
    <div className={cs.container}>
      {feedList?.map((item) => {
        return <Post key={id} {...item} />;
      })}
    </div>
  );
};
