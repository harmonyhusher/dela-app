import React from "react";

import cn from "classnames";

import cs from "./avatar.module.scss";
import { generateColor } from "@src/shared/helpers/generateColor";
import { Align, Direction } from "@src/shared/interfaces/ui/Flex.interfaces";
import { Flex } from "@src/shared/ui/flex";

type Props = {
  firstName: string;
  lastName: string;
  userId?: string;
  variant?: Variants;
  isLoading?: boolean;
};

enum Variants {
  Small = "small",
}

export const Avatar = ({
  lastName,
  firstName,
  userId,
  variant,
  isLoading,
}: Props) => {
  return (
    <Flex
      align={Align.Center}
      className={cn(
        cs.container,
        {
          [cs.variant]: variant,
        },
        { [cs.isLoading]: isLoading }
      )}
      direction={Direction.Row}
      style={{ background: generateColor(firstName, lastName) }}
    >
      {firstName?.[0]}
      {lastName?.[0]}
    </Flex>
  );
};
