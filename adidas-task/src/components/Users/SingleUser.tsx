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
  return (
    <>
      <p>User Id: {data.id}</p>
      <p>dataname: {data.username}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>Phone: {data.phone}</p>
      <p>Company Name: {data.company.name}</p>
      <p>Company Catchphrase: {data.company.catchPhrase}</p>
      <p>Company BS: {data.company.bs}</p>
      <p>Address Street: {data.address.street}</p>
      <p>Suite: {data.address.suite}</p>
      <p>City: {data.address.city}</p>
      <p>Zipcode: {data.address.zipcode}</p>
      <p>Geo Latitude: {data.address.geo.lat}</p>
      <p>Geo Longitude: {data.address.geo.lng}</p>
    </>
  );
};
