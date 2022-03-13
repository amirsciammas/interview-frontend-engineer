import React, { FC } from "react";
import { Post } from "../../interfaces/PostType";
import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({ post }) => (
  <div className={styles.postItem} data-testid="PostItem">
    <h4 className={styles.title} data-testid="PostItem.title">
      {post.title}
    </h4>
    <div data-testid="PostItem.body">{post.body}</div>
  </div>
);

export default PostItem;
