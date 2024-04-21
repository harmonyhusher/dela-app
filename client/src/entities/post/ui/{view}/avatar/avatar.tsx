import React from 'react';

import { mainFont } from '@/fonts/MainFont';
import { generateColor } from '@/helpers/generateColor';
import { Align, Direction } from '@/interfaces/ui/Flex.interfaces';
import { Flex } from '@/ui/flex';
import cn from 'classnames';

import cs from './avatar.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  userId?: string;
  variant?: Variants;
};

enum Variants {
  Small = 'small',
}

export const Avatar = ({ lastName, firstName, userId, variant }: Props) => {
  return (
    <Flex
      align={Align.Center}
      className={cn(cs.container, mainFont.className, {
        [cs.variant]: variant,
      })}
      direction={Direction.Row}
      style={{ background: generateColor(firstName, lastName) }}
    >
      {firstName?.[0]}
      {lastName?.[0]}
    </Flex>
  );
};
