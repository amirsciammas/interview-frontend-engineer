import { IPost } from '../../common/types';
import { useFetch } from '../../hooks/useFetch';
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
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
