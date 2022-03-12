import React, { FC, useEffect, useState } from "react";
import styles from "./UsersPage.module.scss";
import UsersService from "../../services/UsersService";
import { User } from "../../interfaces/UserType";
import UserItem from "../UserItem/UserItem";
import Grid from "@mui/material/Grid";

interface UsersPageProps {}

const UsersPage: FC<UsersPageProps> = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  async function fetchUsers() {
    const users = await UsersService.getUsers();
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  });

  if (!users) {
    return <span>"loading..."</span>;
  }

  return (
    <div className={styles.UsersPage} data-testid="UsersPage">
      <h1 className={styles.title}>List of users</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {users.map((user) => (
          <Grid item xs={11} md={5}>
            <UserItem user={user} key={user.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UsersPage;
