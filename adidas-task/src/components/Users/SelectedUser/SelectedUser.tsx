import { IUser } from '../../../common/types';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

export const SelectedUser = () => {
  const { id } = useParams();
  const { data, loading, isApiSuccess } = useFetch<IUser>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {} as IUser
  );

  if (!isApiSuccess) {
    throw Error('Cannot find that user ');
  }
  if (loading) {
    return <p>Loading data....</p>;
  }
  return (
    <>
      <p>User Id: {data.id}</p>
      <p>dataname: {data.username}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>Phone: {data.phone}</p>
    </>
  );
};
