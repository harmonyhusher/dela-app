/* eslint-disable max-len */
import React from 'react';

import { routes } from '@src/app/routes';
import { $userData } from '@src/entities/user/api/query';
import { ActionsPost } from '@src/processes/actions_post';
import { AddFriend } from '@src/processes/add_friend';
import { CommentPost } from '@src/processes/comment_post';
import { formatDateTime } from '@src/shared/helpers/formatDate';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';
import { PostSkeleton } from '@src/shared/ui/sceleton/Post';
import { Wrapper } from '@src/shared/ui/wrapper';
import { Avatar } from '@src/widgets/avatar/avatar';
import { Comments } from '@src/widgets/comments';

import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';

import cs from './post.module.scss';

export const Post = ({ firstName, lastName, userId, description, comments, likes, createdAt, _id }: Partial<IPost>) => {
  const [value, setValue] = React.useState('');
  const { data: user, pending } = useUnit($userData);

  if (pending) {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  }

  return (
    <Wrapper className={cn(cs.wrapper)}>
      <Container className={cn(cs.container)}>
        <Flex className={cs.name_container}>
          {_id && (
            <Link params={{ userId: String(_id) }} to={routes.private.user}>
              <Avatar firstName={firstName || ''} lastName={lastName || ''} userId={userId as string} />
            </Link>
          )}
          <Paragraph>{firstName + ' ' + lastName}</Paragraph>
          <Paragraph>{createdAt && formatDateTime(new Date(createdAt))}</Paragraph>
        </Flex>
        {userId && <AddFriend id={Number(userId)} inFriends={user?.friends.includes(userId) as boolean} />}
        <Paragraph>{description}</Paragraph>
      </Container>
      <ActionsPost
        amount={Object.keys(likes || {}).length}
        data={{ postId: _id as number, userId: String(user?._id) }}
        isLiked={likes ? (user?._id !== undefined ? user?._id in likes : false) : false}
      />
      <Comments comments={comments || []} />
      <CommentPost id={_id as number} set={setValue} value={value} />
    </Wrapper>
  );
};
