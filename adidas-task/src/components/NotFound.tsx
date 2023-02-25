import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  console.log('hheiaw');
  return (
    <>
      <h2>Page not found!!!</h2>
      <p>
        Please <Link to="/">click here</Link> to go back to the home page
      </p>
    </>
  );
};

export default NotFound;
