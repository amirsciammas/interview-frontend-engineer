import { FunctionComponent, useEffect, useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { getUsers } from "../../utils/api";
import { User } from "../../utils/api.types";
import Users from "../users";

const Container: FunctionComponent = () => {
  const [users, setusers] = useState([] as User[])
  const [selectedUser, setselectedUser] = useState('')

  useEffect(() => {
    getUsers().then(users => setusers(users as User[]));
  }, []);

  const onSelectUser = (event: SelectChangeEvent<string>) => {
    setselectedUser(event.target.value as string);
  };

  if(users){
    return <Users users={users} selectedUserId={selectedUser} onSelectUser={onSelectUser}/>}
  return null;
};

export default Container;
