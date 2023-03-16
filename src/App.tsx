import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { User } from './components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />

      {/* <Route/> */}
    </Routes>
  );
};

export default App;
