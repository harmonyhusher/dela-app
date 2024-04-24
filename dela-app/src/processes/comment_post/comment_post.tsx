import { Container } from "@src/shared/ui/container";
import { Borders } from "@src/shared/ui/container/container";
import { Input } from "@src/shared/ui/input";
import cs from "./comment.module.scss";
import { Avatar } from "@src/widgets/avatar/avatar";

export const CommentPost = () => {
  return (
    <Container borders={Borders.Bottom} className={cs.container}>
      <Avatar firstName="Д" lastName="С" />
      <Input placeholder="Введите комментарий..." />
    </Container>
  );
};
