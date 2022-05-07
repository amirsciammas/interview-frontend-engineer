import React, { useState, useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { User } from '../../types/user';
import UserList from './UserList';

const UserPage = (): React.ReactElement => {
  const {
    users,
    isFetching: isFetchingUsers,
    error,
  } = useUsers();

  const [userName, setUserName] = useState('');
  const [filteredUser, setFilteredUser] = useState<Array<User>>([]);
  useEffect(() => {
    if (userName === "") {
      setFilteredUser(users);
    } else {     
      setFilteredUser(users.filter((user) => user.username.toLowerCase().includes(userName.toLowerCase())));
    }
  },[users, userName]);

  if(isFetchingUsers) {
    return (      
      <h1>Fetching the User details</h1>      
    );
  } else if(error || users?.length === 0) {
    return ( 
      <h1>No Results found</h1>
    )
  } else {
    return (
      <>      
        <div>
          <h2>Search By User Name: </h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter the user name"
          />
        </div>
        <UserList users={filteredUser}></UserList>
      </>
    )
  }
}

export default UserPage;