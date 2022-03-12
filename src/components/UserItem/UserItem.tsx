import React, { FC } from "react";
import { User } from "../../interfaces/UserType";
import styles from "./UserItem.module.scss";
import Grid from "@mui/material/Grid";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => (
  <div className={styles.UserItem} data-testid="UserItem">
    <div className={styles.name}>{user.name}</div>
    <div>"{user.username}"</div>

    <div>{user.email}</div>
    <div>{user.website}</div>
  </div>
);

export default UserItem;
