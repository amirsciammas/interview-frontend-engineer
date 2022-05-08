import React from "react";
import { User } from "../../types/user";

interface UserListProps {
  users: Array<User>;
}

const UserList = ({users}: UserListProps): React.ReactElement => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>User specific Post Link</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {users && 
          users.map((user) => {
            const { id, name, username, email, phone, website } = user;
            const role = "tabel-row";
            return (
              <tr key={id} className="trow" role={role}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td><a href={`/users/${id}/posts`}>{username} Post</a></td>
              </tr>
            );
          })         
        }
      </tbody>
    </table>
  );
}

export default UserList;
