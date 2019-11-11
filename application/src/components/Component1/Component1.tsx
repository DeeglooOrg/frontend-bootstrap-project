import * as React from 'react';
import { connect } from 'react-redux';
import { changeRandomMessage } from '../../../../presentation/state/actions';
import { ActionTypes } from '../../../../domain/enums'

import HeadTags from '../Head/Tags';
import { Grid, Button } from '@material-ui/core';

interface Props {
  message: string;
  changeMessage(): (message: string) => object;
  myNumber: number;
  incrementNumber(): () => void
}

const Component1 = (props: Props) => {
  return (
    <>
      <HeadTags title='Component 1' />
      <Grid container>
        <Grid item xs={12}>
          <h1>Component 1</h1>
        </Grid>
        <Grid item xs={6}>
          <p>{props.message}</p>
          <Button onClick={props.changeMessage} variant='contained' color='default'>
            Change text
          </Button>
        </Grid>
        <Grid item xs={6}>
          <p>{props.myNumber}</p>
          <Button onClick={props.incrementNumber} variant='contained' color='default'>
            Increment number
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    message: state.firstReducer.message,
    myNumber: state.firstReducer.myNumber,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMessage: () => dispatch(changeRandomMessage('New random message!')),
    incrementNumber: () => dispatch({ type: ActionTypes.INCREMENT_NUMBER, payload: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1);
