import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router';

type TProps = {
    path: string,
    child: FunctionComponent,
    exact?: boolean,
    token: boolean
}

const PrivateRoute: FunctionComponent<TProps> = ({ path, child: Component, exact, token}) => {
return (
    token ? < Route exact={exact} path={path} render={() => (<Component />)} /> : 
    < Redirect to={'/login'} />
)
};

export default PrivateRoute