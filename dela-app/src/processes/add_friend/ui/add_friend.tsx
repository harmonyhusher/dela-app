import { IconFriends, IconFriendsOff } from '@tabler/icons-react';

type Props = {
  inFriends: boolean;
  id: number;
};

export const AddFriend = ({ inFriends, id }: Props) => {
  return inFriends ? <IconFriends /> : <IconFriendsOff />;
};
