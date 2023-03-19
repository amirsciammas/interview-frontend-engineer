import { useNavigate } from 'react-router-dom';
import { Button, Loading, User } from '../../components';
import { useUsers } from '../../hooks';
import { User as UserType } from '../../types';
import styles from './index.module.css';
import './index.module.css';
import { Heading } from '../../components/heading';

export const Users = (): JSX.Element => {
  const { isPending, users } = useUsers();

  return (
    <>
      {isPending || !users ? (
        <Loading />
      ) : users.isError ? (
        <div>Unable to fetch users</div>
      ) : (
        <UserList users={users.data} />
      )}
    </>
  );
};

type UserListProps = {
  users: UserType[];
};

const UserList = ({ users }: UserListProps) => {
  const navigator = useNavigate();

  const onUserClick = (user: UserType) => {
    navigator(`/user/posts/${user.name}/${user.id}`);
  };

  return (
    <>
      <Heading>
        <>Users</>
      </Heading>
      <div role="list" className={styles.users}>
        {users.map((user) => (
          <div className={styles.user} key={user.id}>
            <User user={user} />
            <Button onClick={() => onUserClick(user)}>Show Post</Button>
          </div>
        ))}
      </div>
    </>
  );
};
