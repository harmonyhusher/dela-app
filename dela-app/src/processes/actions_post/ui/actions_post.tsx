import { IconHeart } from "@tabler/icons-react";

import { IconHeartFilled } from "@tabler/icons-react";
import { useUnit } from "effector-react";
import { ILike, clickLike } from "../model/model";
import { Container } from "@src/shared/ui/container";
import { Borders } from "@src/shared/ui/container/container";
import { Flex } from "@src/shared/ui/flex";

export const ActionsPost = ({
  isLiked,
  data,
}: {
  isLiked: boolean;
  data: ILike;
}) => {
  const [click] = useUnit([clickLike]);

  return (
    <Container borders={Borders.NoRadius}>
      <Flex>
        {isLiked ? (
          <IconHeartFilled
            onClick={() => click(data)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <IconHeart
            onClick={() => click(data)}
            style={{ cursor: "pointer" }}
          />
        )}
      </Flex>
    </Container>
  );
};
