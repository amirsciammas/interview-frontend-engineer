import React, { FC } from "react";
import { Post } from "../../interfaces/PostType";
import styles from "./PostItem.module.scss";
import Grid from "@mui/material/Grid";

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({ post }) => (
  <div className={styles.postItem} data-testid="PostItem">
    <h4 className={styles.title}>{post.title}</h4>
    <div>{post.body}</div>
  </div>
);

export default PostItem;
