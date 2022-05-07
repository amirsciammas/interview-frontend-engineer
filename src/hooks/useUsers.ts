import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getUserById, getUsers } from '../api/users';
import { User } from '../types/user';

interface UsersProps {
  users: Array<User>;
  isFetching: boolean;
  error: unknown | undefined;
  isSuccess: boolean;
}

export const useUsers = (): UsersProps => {
  const [users, setUsers] = useState<Array<User> | null>(null);
  const { data, isFetching, error, isSuccess } = useQuery(
    'user',
    () => getUsers(),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return {
    users: users || [],
    isFetching,
    error,
    isSuccess,
  };
}

interface UserProps {
  user: User | null;
  isFetching: boolean;
  error: unknown | undefined;
  isSuccess: boolean;
}

export const useUser = (id: number): UserProps => {
  const [user, setUser] = useState<User | null>(null);
  const { data, isFetching, error, isSuccess } = useQuery(
    'user',
    () => getUserById(id),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return {
    user: user,
    isFetching,
    error,
    isSuccess,
  };
}