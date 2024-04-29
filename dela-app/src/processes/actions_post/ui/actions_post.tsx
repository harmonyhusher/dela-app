import { Align, Justify } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Container } from '@src/shared/ui/container';
import { Borders } from '@src/shared/ui/container/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';

import { IconHeart, IconHeartFilled, IconHearts } from '@tabler/icons-react';
import classNames from 'classnames';
import { useUnit } from 'effector-react';

import { clickLike, ILike } from '../model/model';
import cs from './actions_post.module.scss';

export const ActionsPost = ({
  isLiked,
  data,
  amount,
  isLoading,
}: {
  isLiked: boolean;
  data: ILike;
  amount: number;
  isLoading?: boolean;
}) => {
  const [click] = useUnit([clickLike]);

  return (
    <Container borders={Borders.NoRadius} isLoading={isLoading}>
      <Flex align={Align.Center} justify={Justify.SpaceBetween}>
        {isLiked ? (
          <IconHeartFilled
            className={isLiked ? classNames(cs.like_button, cs.liked) : undefined}
            onClick={() => click(data)}
          />
        ) : (
          <IconHeart
            className={isLiked ? undefined : classNames(cs.like_button, cs.unliked)}
            onClick={() => click(data)}
          />
        )}
        {amount > 0 && (
          <Flex>
            <Paragraph>{amount}</Paragraph>
            <IconHearts />
          </Flex>
        )}
      </Flex>
    </Container>
  );
};
