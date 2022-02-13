
import { Container } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserAccess } from '../../redux/user/selectors';
import { TAppState } from '../../types/appState';
import { routesMap } from '../../utils/routes.utils';

type TProps = {
    userAccess: { [key: string]: boolean }
  };
  
  const mapStatetoProps = (state: TAppState) => ({
    userAccess: selectUserAccess(state)
  })

const TheContent: FunctionComponent<TProps> = ({ userAccess }) => {

    // Map over allowed routes and add to App respectively
    const routes = [];
    for (const [key, value] of Object.entries(userAccess)) {
        value && routes.push(routesMap[key])
    }

    return (
        <Container>
            {routes}
            <Redirect from={'/'} to={'/home'} />
        </Container>
    )
};

export default connect(mapStatetoProps)(TheContent)

