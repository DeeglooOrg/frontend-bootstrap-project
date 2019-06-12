import * as React from 'react';
import { connect } from 'react-redux';

import HeadTags from '../Head/Tags';
import Grid from '@material-ui/core/Grid';

interface Props {
  title: string,
  body: string,
}

const Component2 = (props: Props) => {
  return (
    <>
      <HeadTags title='Component 2' />
      <Grid container>
        <Grid item xs={12}>
          <h1>Component 2</h1>
          <p>Fetch request to <a href='https://jsonplaceholder.typicode.com/posts/1'>json placeholder</a> using redux-saga</p>
          <p>Title: <br /> {props.title}</p>
          <p>Body: <br /> {props.body}</p>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    title: state.getApiDataReducer.title,
    body: state.getApiDataReducer.body
  }
}

export default connect(
  mapStateToProps,
  null
)(Component2);