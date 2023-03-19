import { Route, Routes } from 'react-router-dom';
import { PostPage, Users } from './pages';

const App = () => {
  return <RouteHandler />;
};

export default App;

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/posts/:id" element={<PostPage />} />
    </Routes>
  );
};
