import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Body from './components/layout/Body';


const Router = () => {
        return (
                <>
                        <BrowserRouter>
                                <Switch>
                                        <Suspense fallback={<CircularProgress />}>
                                                <Route path="/" render={() => <Body />} />
                                        </Suspense>
                                </Switch>
                        </BrowserRouter>
                </>
        )
};

export default Router