import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navigation.scss';
import { AppBar, List, ListItem, ListItemText, Typography } from '@material-ui/core';

interface Props {
  isAuthenticated: boolean
}

const Navigation = (props: Props) => {
  return (
    <AppBar position='static' color='primary'>
      <List component='nav'>
        <ListItem component='div'>

          <ListItemText inset>
            <Typography align='center'>
              <Link className='nav-link-color' to='/'>Home</Link>
            </Typography>
          </ListItemText>

          <ListItemText inset>
            <Typography align='center'>
              <Link className='nav-link-color' to='/component1'>Component 1</Link>
            </Typography>
          </ListItemText>

          <ListItemText inset>
            <Typography align='center'>
              <Link className='nav-link-color' to='/component2'>Component 2</Link>
            </Typography>
          </ListItemText>

          <ListItemText inset>
            <Typography align='center'>
              <Link className='nav-link-color' to='/login'>
                {props.isAuthenticated ? 'Logout' : 'Login'}
              </Link>
            </Typography>
          </ListItemText>

        </ListItem >
      </List>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(Navigation);
