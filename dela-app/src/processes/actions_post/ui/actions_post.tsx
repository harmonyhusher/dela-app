import { IconHeart } from "@tabler/icons-react";

import { IconHeartFilled } from "@tabler/icons-react";
import { useUnit } from "effector-react";
import { ILike, clickLike } from "../model/model";
import { Container } from "@src/shared/ui/container";
import { Borders } from "@src/shared/ui/container/container";
import { Flex } from "@src/shared/ui/flex";

import cs from "./actions_post.module.scss";
import classNames from "classnames";

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
            className={
              isLiked ? classNames(cs.like_button, cs.liked) : undefined
            }
            onClick={() => click(data)}
          />
        ) : (
          <IconHeart
            onClick={() => click(data)}
            className={
              isLiked ? undefined : classNames(cs.like_button, cs.unliked)
            }
          />
        )}
      </Flex>
    </Container>
  );
};
