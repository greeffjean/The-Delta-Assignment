import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from './components/layout/Body';
import NavigationComponent from './components/common/navigation/navigation';

function Router() {
  return (
    <BrowserRouter>
      <NavigationComponent />
      <Switch>
        <Suspense fallback={<CircularProgress />}>
          <Route path="/" render={() => <Body />} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
