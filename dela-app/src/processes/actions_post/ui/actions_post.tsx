import { IconHeartFilled, IconHearts, IconHeart } from "@tabler/icons-react";
import { useUnit } from "effector-react";
import { ILike, clickLike } from "../model/model";
import { Container } from "@src/shared/ui/container";
import { Borders } from "@src/shared/ui/container/container";
import { Flex } from "@src/shared/ui/flex";

import cs from "./actions_post.module.scss";
import classNames from "classnames";
import { Align, Justify } from "@src/shared/interfaces/ui/Flex.interfaces";
import { Paragraph } from "@src/shared/ui/paragraph/paragraph";

export const ActionsPost = ({
  isLiked,
  data,
  amount,
}: {
  isLiked: boolean;
  data: ILike;
  amount: number;
}) => {
  const [click] = useUnit([clickLike]);

  return (
    <Container borders={Borders.NoRadius}>
      <Flex justify={Justify.SpaceBetween} align={Align.Center}>
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
