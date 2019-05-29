import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

const Navigation = () => {
  return (
    <AppBar position='static' color='primary'>
      <List component='nav'>
        <ListItem component='div'>

          <ListItemText inset>
            <TypoGraphy align='center'>
              <Link className='nav-link-color' to='/'>Home</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy align='center'>
              <Link className='nav-link-color' to='/component1'>Component 1</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy align='center'>
              <Link className='nav-link-color' to='/component2'>Component 2</Link>
            </TypoGraphy>
          </ListItemText>

        </ListItem >
      </List>
    </AppBar>
  )
}

export default Navigation;