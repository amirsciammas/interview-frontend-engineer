import { useNavigate } from 'react-router-dom';
import { User as UserType } from '../../types';
import { Button } from '../button';
import styles from './styles.module.css';

type UserProps = {
  user: UserType;
};

export const User = ({ user }: UserProps) => {
  const navigate = useNavigate();

  const onUserClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <h3>{user.name}</h3>
        <ul>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
        </ul>
        <div>
          <Button onClick={onUserClick}>Show Post</Button>
        </div>
      </div>
    </div>
  );
};
