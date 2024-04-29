import { Post } from '@src/entities/post/ui/post';
import { userFeed } from '@src/pages/user/[id]/model/model';

import { useUnit } from 'effector-react';

import { feedQuery } from '../model/model';
import cs from './list.module.scss';

export const FeedList = ({ type = 'feed' }: { type?: 'feed' | 'user' }) => {
  const { data, pending } = useUnit({
    data: type === 'user' ? userFeed.$data : feedQuery.$data,
    pending: type === 'user' ? userFeed.$pending : feedQuery.$pending,
  });

  if (pending) {
    return <div>Загрузка</div>;
  }

  return (
    <div className={cs.container}>
      {data?.map((item) => {
        return <Post key={item?.userId + item?.createdAt + item?.comments.length} {...item} />;
      })}
    </div>
  );
};
