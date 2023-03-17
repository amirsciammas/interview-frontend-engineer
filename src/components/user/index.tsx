import { User as UserType } from '../../types';
import { Button } from '../button';

type UserProps = {
  user: UserType;
  onUserClick: () => void;
};

export const User = ({ user, onUserClick }: UserProps) => {
  return (
    <div>
      <div>
        <h3>{user.name}</h3>
        <div>{user.email}</div>
        <div>{user.company.name}</div>
      </div>
      <div>
        <Button onClick={onUserClick}></Button>
      </div>
    </div>
  );
};
