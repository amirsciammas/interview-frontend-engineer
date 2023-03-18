import { useParams } from 'react-router-dom';
import { Loading } from '../components';
import { usePosts } from '../hooks/usePosts';
import { findValueInList } from '../utils';
import { Post as PostType } from '../types/post';

export const UserInfo = () => {
  const { id } = useParams();
  //   const { isPending, users } = useUsers();

  const { isPending, posts } = usePosts();

  const post = posts && id ? findValueInList(posts.data, 'userId', +id) : null;

  return <>{isPending || !post ? <Loading /> : <Post post={post} />}</>;
};

type PostProps = {
  author?: string;
  post: PostType;
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h3>Users Post</h3>
      <strong>{post.title}</strong>
      <div>{post.body}</div>
    </div>
  );
};
