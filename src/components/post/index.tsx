import React from 'react';
import { Post as PostType } from '../../types/post';
import styles from './index.module.css';

type PostProps = {
  author?: string;
  post: PostType;
};

export const Post = ({ post }: PostProps) => {
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </div>
  );
};
