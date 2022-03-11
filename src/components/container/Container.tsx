import { FunctionComponent, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getUsers } from "../../utils/api";
import { User } from "../../utils/api.types";

const Container: FunctionComponent = () => {
  const [users, setusers] = useState([] as User[])
  const [selectedUser, setselectedUser] = useState('')

  useEffect(() => {
    getUsers().then(users => setusers(users as User[]));
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setselectedUser(event.target.value as string);
  };

  if(users){
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedUser}
            label="User"
            onChange={handleChange}
          >
            {
              users.map((user) => {
                return (
                  <MenuItem value={user.id}>{user.name}</MenuItem>
                )
              }) 
            }
          </Select>
        </FormControl>
      </Box> 
    )}

  return null;
};

export default Container;
