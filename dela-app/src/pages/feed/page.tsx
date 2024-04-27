import { User } from "@src/entities/user/ui";
import { FeedLayout } from "@src/shared/layouts/feed_layout";
import { FeedList } from "@src/widgets/feed/ui/feed_list";
import { createRoute } from "atomic-router";

export const feedRoute = createRoute();

export const Feed = () => {
  return (
    <FeedLayout>
      <User />
      <FeedList />
    </FeedLayout>
  );
};
