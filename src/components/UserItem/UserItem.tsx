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
        <div data-testid="UserItem.name">{user.name}</div>
        <div data-testid="UserItem.username">"{user.username}"</div>
      </Grid>
      <Grid item xs={6}>
        <div data-testid="UserItem.email">{user.email}</div>
        <div data-testid="UserItem.website">{user.website}</div>
      </Grid>
    </Grid>
  </div>
);

export default UserItem;
