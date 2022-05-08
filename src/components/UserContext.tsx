import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { User } from '../types/user';

interface UserContextInterface {
  users: Array<User>;
  isFetchingUsers: boolean;
  error: unknown | undefined;
  isSuccess: boolean;
}

const UserContext = React.createContext<UserContextInterface>({
  users: [],
  isFetchingUsers: false,
  error: null,
  isSuccess: false
});

export const UserProvider = ({children}: any) => {
  const {
    users,
    isFetching: isFetchingUsers,
    error,
    isSuccess,
  } = useUsers();
  
  const userContextValue: UserContextInterface = {
    users,
    isFetchingUsers,
    error,
    isSuccess
  };

  return (
    <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>
  )
}

export default UserContext;