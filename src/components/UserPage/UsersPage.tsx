import React, { FC } from "react";
import styles from "./UsersPage.module.scss";

interface UsersPageProps {}

const UsersPage: FC<UsersPageProps> = () => (
  <div className={styles.UsersPage} data-testid="UsersPage">
    UsersPage Component
    <h1 >List of users</h1>
  </div>
);

export default UsersPage;
