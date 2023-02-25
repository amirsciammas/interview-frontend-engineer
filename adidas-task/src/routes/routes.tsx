import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { PostsList, SelectedPost, PostError } from '../components/Posts';
import { UsersList, SelectedUser, UserError } from '../components/Users';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/users" element={<UsersList />} />
      <Route
        path="/posts/:id"
        element={<SelectedPost />}
        errorElement={<PostError />}
      />
      <Route
        path="/users/:id"
        element={<SelectedUser />}
        errorElement={<UserError />}
      />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
