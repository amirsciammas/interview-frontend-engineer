import React from 'react';
import { IUser } from '../../../../common/types';

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div className="list-body">
      <p>User Id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>Phone: {user.phone}</p>
      <p>Company Name: {user.company.name}</p>
      <p>Company Catchphrase: {user.company.catchPhrase}</p>
      <p>Company BS: {user.company.bs}</p>
      <p>Address Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
      <p>Geo Latitude: {user.address.geo.lat}</p>
      <p>Geo Longitude: {user.address.geo.lng}</p>
    </div>
  );
};

export default User;
