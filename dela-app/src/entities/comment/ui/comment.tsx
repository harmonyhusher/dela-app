import React from 'react';


import cs from './comment.module.scss';
import { Avatar } from '@src/entities/post/ui/{view}/avatar/avatar';
import { Direction } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Container } from '@src/shared/ui/container';
import { Flex } from '@src/shared/ui/flex';

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
