import Grid from "@mui/material/Grid";
import React, { FC, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { User } from "../../interfaces/UserType";
import UsersService from "../../services/UsersService";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersPage.module.scss";

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
          <Grid item xs={11} md={5} key={user.id} >
            <Link to={`/users/${user.id}`}>
              <UserItem user={user} />
            </Link>
            </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UsersPage;
