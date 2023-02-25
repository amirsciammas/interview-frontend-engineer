import { IUser } from '../../common/types';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const SingleUser = () => {
  const { id } = useParams();
  const { data, loading, isApiSuccess } = useFetch<IUser>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {} as IUser
  );

  if (!isApiSuccess) {
    throw Error('Cannot find that post ');
  }
  if (loading) {
    return <p>Loading data....</p>;
  }
  return <div>{data.name}</div>;
};
