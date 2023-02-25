import { IPost } from '../../../../common/types';

interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  return (
    <li className="list-body">
      <p>Post Id: {post.id}</p>
      <p>User Id: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </li>
  );
};

export default Post;
