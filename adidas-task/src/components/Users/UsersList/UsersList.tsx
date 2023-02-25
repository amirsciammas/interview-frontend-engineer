import { IUser } from '../../../common/types';
import { useFetch } from '../../../hooks/useFetch';
import User from './User/User';
export const AllUsers = () => {
  const { data, loading } = useFetch<IUser[]>(
    `https://jsonplaceholder.typicode.com/users`,
    []
  );

  if (loading) {
    return <p>Loading data....</p>;
  }

  return (
    <div>
      {data.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
