import Grid from "@mui/material/Grid";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../interfaces/PostType";
import PostsService from "../../services/PostsService";
import PostItem from "../PostItem/PostItem";
import styles from "./PostPage.module.scss";

interface PostPageProps {}

const PostPage: FC<PostPageProps> = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const { id } = useParams();

  async function fetchPosts() {
    if (!id) {
      return;
    }
    const posts = await PostsService.getPostsOfUser(parseInt(id));
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  });

  if (!posts) {
    return <span>"loading..."</span>;
  }

  return (
    <div className={styles.PostPage} data-testid="PostPage">
      <h1 className={styles.title}>Username</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center" className={styles.posts}>
        {posts.map((post) => (
          <Grid item xs={8} key={post.id}>
            <PostItem post={post} key={post.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostPage;
