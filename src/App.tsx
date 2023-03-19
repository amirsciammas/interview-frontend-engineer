import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { PostPage, Users } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<PostPage />} />
    </Routes>
  );
};

export default App;
