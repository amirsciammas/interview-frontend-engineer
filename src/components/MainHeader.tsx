import React from 'react';
import { useLocation } from 'react-router-dom';

const MainHeader = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (    
    <div className="MainHeaderWrapper">       
      <ul className="LeftMenu">
        <li>
          <a href="/">
            <div className={pathname === '/' ? 'Active' : ''}>
              Users
            </div>
          </a>
        </li>
        <li>
          <a href="/posts">
            <div className={pathname === '/posts' ? 'Active' : ''}>
              Posts
            </div>
          </a>
        </li>
      </ul>
    </div>    
  );
};

export default MainHeader;
