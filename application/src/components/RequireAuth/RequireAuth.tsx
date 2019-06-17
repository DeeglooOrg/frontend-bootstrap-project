import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Component2 from '../Component2/Component2';

interface Props {
  match: any;
  path: string,
  isAuthenticated: boolean
}

const RequireAuth = (props: Props) => {
  return (
    <div>
      {props.isAuthenticated ? (
        <div>
          <Route exact path={`${props.match.url}/component2`} component={Component2} />
        </div>
      ) : (
          <Redirect to='/login' />
        )
      }
    </div>
  )
}


const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(RequireAuth);
