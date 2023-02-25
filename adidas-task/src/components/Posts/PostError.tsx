import React from 'react';
import { Link } from 'react-router-dom';

export const PostError = () => {
  return (
    <>
      <h2>Ooops!! This post doesn't exist</h2>

      <p>
        <Link to="/">Click here</Link> to go back to the Homepage
      </p>
    </>
  );
};
