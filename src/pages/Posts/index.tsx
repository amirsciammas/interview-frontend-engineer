import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { observer } from 'mobx-react-lite';
import store from 'src/store';
import * as mainPageClasses from 'src/pages/MainPage/main.module.css';
import UserPost from 'src/components/UserPost';
import * as classes from './posts.module.css';

function Posts() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      store.getUser(id);
      store.getUserPosts(id);
    }
  }, [id]);
  return (
    <div className={mainPageClasses.container}>
      <Link to="/">
        <FiArrowLeft />
        Go back
      </Link>
      {store.user && (
        <div className={classes.userName}>
          {store.user.username}
          {'\'s '}
          posts
          {' '}
          {`(${store.postsCount})`}
        </div>
      )}
      {store.posts.map((post) => (
        <React.Fragment key={post.id}>
          <UserPost post={post} />
        </React.Fragment>
      ))}
    </div>
  );
}
export default observer(Posts);
