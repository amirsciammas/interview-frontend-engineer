import React from 'react';
import { getUsers } from '../../api/users';

const UserPage = (): React.ReactElement => {
  const userData = getUsers();
  console.log('userData', userData);
  return ( 
    <h1>No Results found</h1>
  )
}

export default UserPage;