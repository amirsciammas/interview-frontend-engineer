import { IUser } from '../../common/types';
import { useFetch } from '../../hooks/useFetch';
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
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
