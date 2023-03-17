import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Users } from './pages/Users';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />

      {/* <Route/> */}
    </Routes>
  );
};

export default App;
