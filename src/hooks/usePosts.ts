import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import { Post } from '../types/post';

interface PostsProps {
  posts: Array<Post>;
  isFetching: boolean;
  error: unknown | undefined;
  isSuccess: boolean;
}

export const usePosts = (): PostsProps => {
  const [posts, setPosts] = useState<Array<Post> | null>(null);
  const { data, isFetching, error, isSuccess } = useQuery(
    'post',
    () => getPosts(),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return {
    posts: posts || [],
    isFetching,
    error,
    isSuccess,
  };
}