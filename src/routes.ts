import UserPage from './components/User';
import PostPage from './components/Post';
import NotFound from './components/NotFound';
import UserByPost from './components/User/UserByPost';

const routes = [
  {
    path: '/',
    component: UserPage,
    exact: true,
  },
  {
    path: '/posts',
    component: PostPage,
    exact: true,    
  },
  {
    path: '/users/:id/posts',
    component: UserByPost,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export default routes;
