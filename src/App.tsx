import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './store';
import MainPage from './pages/MainPage';

function App() {
  useEffect(() => {
    store.getUsers();
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
