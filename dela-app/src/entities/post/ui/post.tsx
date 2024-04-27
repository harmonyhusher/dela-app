import React from 'react';

import { routes } from '@src/app/routes';
import { $userData } from '@src/entities/user/api/query';
import { ActionsPost } from '@src/processes/actions_post';
import { CommentPost } from '@src/processes/comment_post';
import { formatDateTime } from '@src/shared/helpers/formatDate';
import { IPost } from '@src/shared/interfaces/entities/Post.interface';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';
import { Wrapper } from '@src/shared/ui/wrapper';
import { Avatar } from '@src/widgets/avatar/avatar';
import { Comments } from '@src/widgets/comments';
import { Name } from '@src/widgets/name/name';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';

import cs from './post.module.scss';

export const Post = ({
  firstName,
  lastName,
  userId,
  description,
  comments,
  likes,
  createdAt,
  _id,
}: Partial<IPost>) => {
  const [value, setValue] = React.useState('');
  const { data: user, pending } = useUnit($userData);
  if (!user) {
    return <></>;
  }
  return (
    <Wrapper className={cn(cs.wrapper)}>
      <Container className={cn(cs.container)}>
        <Flex className={cs.name_container}>
          {_id && (
            <Link params={{ userId: String(_id) }} to={routes.private.user}>
              <Avatar
                firstName={firstName || ''}
                isLoading={pending}
                lastName={lastName || ''}
                userId={userId as string}
              />
            </Link>
          )}
          <Name
            firstName={firstName || ''}
            isLoading={pending}
            lastName={lastName || ''}
          />
          <Paragraph isLoading={pending}>
            {createdAt && formatDateTime(new Date(createdAt))}
          </Paragraph>
        </Flex>
        <span>{description}</span>
      </Container>
      <ActionsPost
        amount={Object.keys(likes || {}).length}
        data={{ postId: _id as number, userId: String(user?._id) }}
        isLiked={
          likes ? (user?._id !== undefined ? user?._id in likes : false) : false
        }
        isLoading={pending}
      />
      <Comments comments={comments || []} />
      <CommentPost id={_id as number} set={setValue} value={value} />
    </Wrapper>
  );
};
