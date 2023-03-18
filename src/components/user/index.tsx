import { useNavigate } from 'react-router-dom';
import { User as UserType } from '../../types';
import { Button } from '../button';

type UserProps = {
  user: UserType;
};

export const User = ({ user }: UserProps) => {
  const navigate = useNavigate();

  const onUserClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div>
      <div>
        <h3>{user.name}</h3>
        <div>{user.email}</div>
        <div>{user.company.name}</div>
      </div>
      <div>
        <Button onClick={onUserClick}>Show Post</Button>
      </div>
    </div>
  );
};
