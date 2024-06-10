import React from 'react';

import { userQuery } from '@src/entities/user/api/query';
import { IUser } from '@src/shared/interfaces/entities/User.interface';
import { Container } from '@src/shared/ui/container';
import { Input } from '@src/shared/ui/input';
import { Avatar } from '@src/widgets/avatar/avatar';

import { IconSend2 } from '@tabler/icons-react';
import { useUnit } from 'effector-react';

import { sendPost } from '../model/model';
import cs from './create_post.module.scss';

export const CreatePost = () => {
  const [send] = useUnit([sendPost]);
  const { data: user } = useUnit(userQuery);
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container className={cs.container}>
      <Avatar firstName={user?.firstName || ''} lastName={user?.lastName || ''} />
      <Input
        icon={<IconSend2 />}
        id={'post-input'}
        onChange={handleChange}
        onIconClick={() => {
          send({ userId: user?._id as string, descirption: value });
          setValue('');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') send({ userId: user?._id as string, descirption: value });
          setValue('');
        }}
        placeholder="Как прошёл ваш день?"
        value={value}
      />
    </Container>
  );
};
