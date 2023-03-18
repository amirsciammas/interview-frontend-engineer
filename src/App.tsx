import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserInfo, Users } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UserInfo />} />
    </Routes>
  );
};

export default App;
