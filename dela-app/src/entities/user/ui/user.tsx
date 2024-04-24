import { useUnit } from "effector-react";
import { $userData } from "../api/query";
import { Container } from "@src/shared/ui/container";
import { Flex } from "@src/shared/ui/flex";
import { Align } from "@src/shared/interfaces/ui/Flex.interfaces";
import { IconMapPin } from "@tabler/icons-react";

import cs from "./user.module.scss";
import { Paragraph } from "@src/shared/ui/paragraph/paragraph";
import { Borders } from "@src/shared/ui/container/container";
import { Avatar } from "@src/widgets/avatar/avatar";

export const User = () => {
  const { data: user, pending } = useUnit($userData);

  if (pending) {
    return <>Loading</>;
  }

  return (
    <Container
      className={cs.container}
      borders={user && user.friends.length > 0 ? Borders.Top : null}
    >
      <Flex align={Align.Center} className={cs.name}>
        <Avatar
          userId={user?._id}
          firstName={user?.firstName as string}
          lastName={user?.lastName as string}
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
  );
};
