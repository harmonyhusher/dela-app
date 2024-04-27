import React from "react";

import cs from "./name.module.scss";

import cn from "classnames";

type Props = {
  firstName: string;
  lastName: string;
  isLoading?: boolean;
};

export const Name = ({ firstName, lastName, isLoading }: Props) => {
  return (
    <p className={cn(cs.container, isLoading && cs.isLoading)}>
      {firstName + " " + lastName}
    </p>
  );
};
