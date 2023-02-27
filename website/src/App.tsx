import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Users, Posts} from "./commonImports";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts/:userid" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
