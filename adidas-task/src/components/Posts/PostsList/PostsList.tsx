import { IPost } from '../../../common/types';
import { useFetch } from '../../../hooks/useFetch';
import Post from './Post/Post';
export const AllPosts = () => {
  const { data, loading } = useFetch<IPost[]>(
    `https://jsonplaceholder.typicode.com/posts`,
    []
  );

  if (loading) {
    return <p>Loading data....</p>;
  }

  return (
    <div>
      {data.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
