import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { AllPosts, SinglePost, PostError } from '../components/Posts';
import { AllUsers, SingleUser, UserError } from '../components/Users';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/users" element={<AllUsers />} />
      <Route
        path="/posts/:id"
        element={<SinglePost />}
        errorElement={<PostError />}
      />
      <Route
        path="/users/:id"
        element={<SingleUser />}
        errorElement={<UserError />}
      />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
