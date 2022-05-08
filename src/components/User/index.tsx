import React, { useState, useEffect, useContext } from 'react';
import { User } from '../../types/user';
import UserContext from '../UserContext';
import UserList from './UserList';

const UserPage = (): React.ReactElement => {
  // Get the Users from Context API
  const { 
    users,
    isFetchingUsers,
    error,
  } = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [filteredUser, setFilteredUser] = useState<Array<User>>([]);
  useEffect(() => {
    if(users.length > 0) {
      if (userName === "") {
        setFilteredUser(users);
      } else {     
        setFilteredUser(users.filter((user) => user.username.toLowerCase().includes(userName.toLowerCase())));
      }
    }
  },[users, userName]);

  if(isFetchingUsers) {
    return (      
      <h1>Fetching the User details</h1>      
    );
  } else {
    return (
      <div className='TableContainer'>     
        <div className='Search'>
          <h2>Search By User Name: </h2>
          <input
            data-testid="user-name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter the User name"
          />
        </div>

        {
          (error || filteredUser?.length === 0 ) ? 
          (
            <h1>No Results found</h1>
          ) :
          (
            <UserList users={filteredUser}></UserList>
          )
        }             
      </div>
    )
  }
}

export default UserPage;