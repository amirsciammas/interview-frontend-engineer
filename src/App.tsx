import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = (): React.ReactElement => {
  return (
    <Router>        
      <Switch>
        {routes.map((route) => (
          <Route                        
            {...route}
          />
        ))}
      </Switch>       
    </Router>
  );
}

export default App;
