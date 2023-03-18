import { Loading, User } from '../components';
import { useUsers } from '../hooks';
import { User as UserType } from '../types';

export const Users = (): JSX.Element => {
  const { isPending, users } = useUsers();

  return <>{isPending || !users ? <Loading /> : <UserList users={users.data} />}</>;
};

type UserListProps = {
  users: UserType[];
};

// const handleClick = () => {
//   console.log('called handleClick');
// };

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};
