import { IPost } from '../../../common/types';
import { useFetch } from '../../../hooks/useFetch';
import Post from './Post/Post';
export const PostsList = () => {
  const { data, loading } = useFetch<IPost[]>(
    `https://jsonplaceholder.typicode.com/posts`,
    []
  );

  if (loading) {
    return <p>Loading data....</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
