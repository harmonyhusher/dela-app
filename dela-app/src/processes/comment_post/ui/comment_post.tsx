import { Container } from "@src/shared/ui/container";
import { Borders } from "@src/shared/ui/container/container";
import { Input } from "@src/shared/ui/input";
import cs from "./comment.module.scss";
import { Avatar } from "@src/widgets/avatar/avatar";
import { useUnit } from "effector-react";
import { IconSend2 } from "@tabler/icons-react";
import { sendComment } from "../model/model";

export const CommentPost = ({
  id,
  value,
  set,
}: {
  id: number;
  value: string;
  set: (value: string) => void;
}) => {
  const [send] = useUnit([sendComment]);
  return (
    <Container borders={Borders.Bottom} className={cs.container}>
      <Avatar firstName="Д" lastName="С" />
      <Input
        id={`${id}-input`}
        value={value}
        onChange={(e) => set(e.target.value)}
        placeholder="Напишите комментарий..."
        icon={<IconSend2 />}
        onIconClick={() => {
          send({ id: id, comment: value });
        }}
      />
    </Container>
  );
};
