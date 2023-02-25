import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import SelectedPost from '../pages/SelectedPost';
import SelectedUser from '../pages/SelectedUser';
import Users from '../pages/Users';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts/:id" element={<SelectedPost />} />
      <Route path="/users/:id" element={<SelectedUser />} />
    </>
  )
);
