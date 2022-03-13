import Grid from "@mui/material/Grid";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../interfaces/PostType";
import { User } from "../../interfaces/UserType";
import PostsService from "../../services/PostsService";
import UsersService from "../../services/UsersService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PostItem from "../PostItem/PostItem";
import styles from "./PostPage.module.scss";

interface PostPageProps {}

const PostPage: FC<PostPageProps> = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (!id) {
      throw new Error("Id not found");
    }
    PostsService.getPostsOfUser(parseInt(id)).then((posts) => {
      if (isMounted) {
        setPosts(posts);
      }
    });
    UsersService.getUser(parseInt(id)).then((user) => {
      if (isMounted) {
        setUser(user);
      }
    });
    return () => {
      isMounted = false;
    };
  });

  if (!posts || !user) {
    return <LoadingSpinner/>
  }

  return (
    <div data-testid="PostPage">
      <div className={styles.titleWrapper}>
        <h1>{user.name}</h1>
        <h2 className={styles.username}>"{user.username}"</h2>
      </div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className={styles.posts}
      >
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
