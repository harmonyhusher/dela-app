import React from 'react';

import { Avatar } from '@/entities/post/ui/{view}/avatar/avatar';
import { Direction } from '@/interfaces/ui/Flex.interfaces';
import { Container } from '@/ui/container/container';
import { Flex } from '@/ui/flex';

import cs from './comment.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  text: string;
};

export const Comment = ({ firstName, lastName, text }: Props) => {
  return (
    <Container className={cs.container}>
      <Flex direction={Direction.Column}>
        <Avatar firstName={firstName || ''} lastName={lastName || ''} />
      </Flex>
      <p>{text}</p>
    </Container>
  );
};
