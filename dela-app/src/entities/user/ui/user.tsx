import { Align } from '@src/shared/interfaces/ui/Flex.interfaces';
import { Container } from '@src/shared/ui/container';
import { Borders } from '@src/shared/ui/container/container';
import { Flex } from '@src/shared/ui/flex';
import { Paragraph } from '@src/shared/ui/paragraph/paragraph';
import { Avatar } from '@src/widgets/avatar/avatar';
import { Friends } from '@src/widgets/friends';

import { IconMapPin } from '@tabler/icons-react';
import { useUnit } from 'effector-react';

import { $userData } from '../api/query';
import cs from './user.module.scss';

export const User = () => {
  const { data: user, pending } = useUnit($userData);

  if (pending) {
    return <>Loading</>;
  }

  return (
    <div>
      <Container
        borders={user && user.friends.length > 0 ? Borders.Top : Borders.All}
        className={cs.container}
      >
        <Flex align={Align.Center} className={cs.name}>
          <Avatar
            firstName={user?.firstName as string}
            lastName={user?.lastName as string}
            userId={user?._id}
          />
          <Paragraph>
            {user?.firstName} {user?.lastName}
          </Paragraph>
        </Flex>
        <Flex>
          <IconMapPin />
          <Paragraph>{user?.location}</Paragraph>
        </Flex>
      </Container>
      {user?.friends && <Friends />}
    </div>
  );
};
