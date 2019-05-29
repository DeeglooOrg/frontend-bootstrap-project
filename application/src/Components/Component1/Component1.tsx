import * as React from 'react';
import { connect } from 'react-redux';
import { changeRandomMessage } from '../../../../presentation/state/actions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

interface Props {
  message: string;
  changeMessage(): (message: string) => object;
}

const Component1 = (props: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Component 1</h1>
        <p>{props.message}</p>
        <Button onClick={props.changeMessage} variant='contained' color='default'>
          Change text
      </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    message: state.firstReducer.message,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMessage: () => dispatch(changeRandomMessage('New random message!')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1);
