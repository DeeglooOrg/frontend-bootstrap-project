import * as React from 'react';
import { connect } from 'react-redux';

import { ActionTypes } from '../../../../domain/enums';

import HeadTags from '../Head/Tags';

import { Grid, Button } from '@material-ui/core';

interface Props {
  isAuthenticated: boolean,
  login(): () => boolean,
  logout(): () => boolean
}

const Login = (props: Props) => {
  return (
    <>
      <HeadTags title='Login' />
      <Grid container>
        <Grid item xs={12}>
          {props.isAuthenticated ?
            <>
              <h1>Logout</h1>
              <Button onClick={props.logout} variant='contained' color='primary'>Logout</Button>
            </> :
            <>
              <h1>Login</h1>
              <Button onClick={props.login} variant='contained' color='primary'>Login</Button>
            </>
          }
        </Grid>
      </Grid>
    </>
  )
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: () => dispatch({ type: ActionTypes.LOGIN, payload: true }),
    logout: () => dispatch({ type: ActionTypes.LOGOUT, payload: false })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
