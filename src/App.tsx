import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SiteLayout from './layouts/SiteLayout';
import routes from './routes';
import { UserProvider } from './components/UserContext';

const queryClient = new QueryClient();

const App = (): React.ReactElement => {
  return (
    <Router>   
       <QueryClientProvider client={queryClient}>
        <UserProvider>
          <SiteLayout>   
            <Switch>
              {routes.map((route, i) => (
                <Route key={i}                      
                  {...route}
                />
              ))}
            </Switch>   
          </SiteLayout>
        </UserProvider>
      </QueryClientProvider>    
    </Router>
  );
}

export default App;
