import React from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../store';

const MainPage = observer(() => (
  <div>
    {store.users.map((user) => (
      <div key={user.id}>{user.id}</div>
    ))}
  </div>
));

export default MainPage;
