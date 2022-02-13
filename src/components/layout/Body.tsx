
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { selectUserAccess } from '../../redux/user/selectors';
import { TAppState } from '../../types/appState';
import TheContent from './theContent';

type TProps = {
      userAccess: {[key: string] : boolean}
}

const mapStateToProps = (state: TAppState) => ({
      userAccess: selectUserAccess(state)
})

const Body: FunctionComponent<TProps> = (props) => {
      
      return (
            <>
                  <TheContent/>
            </>
      )
};

export default connect(mapStateToProps)(Body)