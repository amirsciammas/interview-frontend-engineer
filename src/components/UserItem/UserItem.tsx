import React, { FC } from "react";
import { User } from "../../interfaces/UserType";
import styles from "./UserItem.module.scss";
import Grid from "@mui/material/Grid";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => (
  <div className={styles.userItem} data-testid="UserItem">
    <Grid container>
      <Grid item xs={6} className={styles.name}>
        <div>{user.name}</div>
        <div>"{user.username}"</div>
      </Grid>
      <Grid item xs={6}>
        <div>{user.email}</div>
        <div>{user.website}</div>
      </Grid>
    </Grid>
  </div>
);

export default UserItem;
