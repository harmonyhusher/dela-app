import React from 'react';

import { Comment } from '@/entities/comment/ui/comment';
import { IPost } from '@/interfaces/entities/Post.interface';
import { Container } from '@/ui/container/container';

import cs from './comments.module.scss';

export const Comments = ({ comments }: Pick<IPost, 'comments'>) => {
  if (!comments.length) return <></>;

  return (
    <Container className={cs.container}>
      {comments?.map((item) => {
        return <Comment key={String(item.createdAt)} {...item} />;
      })}
    </Container>
  );
};
