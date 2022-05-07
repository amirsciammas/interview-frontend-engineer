import React from 'react';

const NotFound = (): React.ReactElement => {
  return (
    <div className='NotFoundContanier'>
      <div className="Content">       
        <h1>We have a problem!</h1>
        <h2>Sorry, we couldn’t find the page you were looking for</h2>
        <a href ="/users">              
          Home Page            
        </a>
      </div>
    </div>
  );
}

export default NotFound;
