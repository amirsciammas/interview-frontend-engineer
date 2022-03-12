import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../interfaces/PostType";
import PostsService from "../../services/PostsService";
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
      {JSON.stringify(posts)}
    </div>
  );
};

export default PostPage;
