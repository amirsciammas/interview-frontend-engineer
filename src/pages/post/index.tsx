import { useParams } from 'react-router-dom';
import { Back, Heading, Loading, Post } from '../../components';
import { usePosts } from '../../hooks/usePosts';
import { filterValueInList } from '../../utils';
import { Post as PostType } from '../../types/post';

import styles from './index.module.css';

export const PostPage = () => {
  const { id, name } = useParams();

  const { isPending, posts } = usePosts();

  const postList = posts && id ? filterValueInList(posts.data, 'userId', +id) : null;
  const author = name ? name : '';

  return (
    <>{isPending || !postList ? <Loading /> : <PostList author={author} posts={postList} />}</>
  );
};

type PostListProps = {
  posts: PostType[];
  author: string;
};

const PostList = ({ author, posts }: PostListProps) => {
  return (
    <>
      <Back />
      <Heading>
        <>Posts by {author}</>
      </Heading>

      {posts.length === 0 && <h2> No post found</h2>}
      <div role="list" className={styles.posts}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
