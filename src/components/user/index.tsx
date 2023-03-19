import { User as UserType } from '../../types';
import styles from './styles.module.css';

type UserProps = {
  user: UserType;
};

export const User = ({ user }: UserProps) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <h3>{user.name}</h3>
        <ul>
          <li>{user.email}</li>
          <li>{user.company.name}</li>
        </ul>
      </div>
    </div>
  );
};
