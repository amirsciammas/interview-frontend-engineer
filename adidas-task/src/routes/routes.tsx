import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts/Posts';
import SelectedPost from '../components/SelectedPost/SelectedPost';
import SelectedUser from '../components/SelectedUser/SelectedUser';
import Users from '../components/Users/User';

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
