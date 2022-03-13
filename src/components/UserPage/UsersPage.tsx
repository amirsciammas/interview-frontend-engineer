import Grid from "@mui/material/Grid";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../interfaces/UserType";
import UsersService from "../../services/UsersService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersPage.module.scss";

interface UsersPageProps {}

const UsersPage: FC<UsersPageProps> = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    let isMounted = true;
    UsersService.getUsers().then((users) => {
      if (isMounted) {
        setUsers(users);
      }
    });
    return () => {
      isMounted = false;
    };
  });

  const content = !users ? (
    <LoadingSpinner data-testid="LoadingSpinner" />
  ) : (
    <>
      <h1 className={styles.title}>List of users</h1>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {users.map((user) => (
          <Grid item xs={11} md={5} key={user.id}>
            <Link to={`/users/${user.id}`}>
              <UserItem user={user} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <div className={styles.UsersPage} data-testid="UsersPage">
      {content}
    </div>
  );
};

export default UsersPage;
