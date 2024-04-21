import React from 'react';

import { mainFont } from '@/fonts/MainFont';
import { IPost } from '@/interfaces/entities/Post.interface';
import { Container } from '@/ui/container/container';
import { Flex } from '@/ui/flex';
import { Comments } from '@/widgets/comments';
import cn from 'classnames';

import { Avatar } from './{view}/avatar/avatar';
import { Name } from './{view}/name/name';
import cs from './post.module.scss';

export const Post = ({ firstName, lastName, userId, description, comments, likes, date }: Partial<IPost>) => {
  return (
    <div>
      <Container className={cn(cs.container, mainFont.className)}>
        <Flex className={cs.name_container}>
          <Avatar firstName={firstName || ''} lastName={lastName || ''} userId={userId as string} />
          <Name firstName={firstName || ''} lastName={lastName || ''} />
        </Flex>
        <span>{description}</span>
      </Container>
      <Comments comments={comments || []} />
    </div>
  );
};
