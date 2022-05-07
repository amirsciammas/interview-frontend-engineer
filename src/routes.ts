import UserPage from './components/User';
import PostPage from './components/Post';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/users',
    component: UserPage,
    exact: true,
  },
  {
    path: '/posts',
    component: PostPage,
    exact: true,    
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export default routes;
