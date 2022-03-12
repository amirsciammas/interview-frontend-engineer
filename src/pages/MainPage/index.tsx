import React from 'react';
import { observer } from 'mobx-react-lite';
import UserComponent from 'src/components/User';
import store from '../../store';
import * as classes from './main.module.css';

function MainPage() {
  return (
    <div className={classes.container}>
      {store.isLoading ? (
        <div className={classes.loading}>Loading users...</div>
      ) : (
        store.users.map((user) => (
          <React.Fragment key={user.id}>
            <UserComponent user={user} />
          </React.Fragment>
        ))
      )}
    </div>
  );
}
export default observer(MainPage);
