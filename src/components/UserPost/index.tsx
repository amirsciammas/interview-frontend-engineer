import React from 'react';
import { Post } from 'src/types/api';
import Card from 'src/components/Card';
import { cardStyle } from 'src/components/User';
import * as classes from './userPost.module.css';

interface Props {
  post: Post
}

function UserPost(props: Props) {
  const { post } = props;
  return (
    <Card additionalStyles={cardStyle}>
      <>
        <div className={classes.title}>{post.title}</div>
        <div>{post.body}</div>
      </>
    </Card>
  );
}

export default UserPost;
