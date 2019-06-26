import * as React from 'react';

import './HomePage.css';

import HeadTags from '../Head/Tags';
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
  return (
    <>
      <HeadTags title='Home Page' />
      <Grid container>
        <Grid item xs={12}>
          <h1>Home page</h1>
          <h2 className='project-name'>Frontend bootstrap project</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage;
