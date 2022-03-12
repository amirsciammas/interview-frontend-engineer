import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from 'src/store';
import MainPage from 'src/pages/MainPage';
import Posts from 'src/pages/Posts';
import ErrorNotice from 'src/components/ErrorNotice';
import * as classes from './app.module.css';

function App() {
  useEffect(() => {
    store.getUsers();
  }, []);

  return (
    <div className={classes.page}>
      <ErrorNotice isVisible={store.isError} />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users/:id/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default observer(App);
