import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-nav__links">
      <div className="home-nav__links__item">
        <p>To view all users, click below</p>
        <Link to="users">Users</Link>
      </div>
      <div className="home-nav__links__item">
        <p>To view all posts, click below</p>
        <Link to="posts">Posts</Link>
      </div>
      <div className="home-nav__links__item">
        <p>To check details of a specific user, you can go to /users/:id</p>
        <p>:id here supports numbers from 1 to 10</p>
        <p>
          Example: <Link to="/users/1">/users/1</Link>
        </p>
      </div>
      <div className="home-nav__links__item">
        <p>To check details of a specific post, you can go to /post/:id</p>
        <p>:id here supports numbers from 1 to 100</p>
        <p>
          Example: <Link to="/posts/1">/posts/1</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
