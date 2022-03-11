import { FunctionComponent } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { User } from "../../utils/api.types";

interface UsersProps {
  users: User[];
  selectedUserId: string;
  onSelectUser: (event: SelectChangeEvent<string>) => void;
}

const Container: FunctionComponent<UsersProps> = ({users, selectedUserId, onSelectUser}) => {
  if(users){
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedUserId}
            label="User"
            onChange={onSelectUser}
          >
            {
              users.map((user) => {
                return (
                  <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
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
