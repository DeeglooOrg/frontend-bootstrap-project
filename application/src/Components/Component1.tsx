import React from 'react';
import { connect } from 'react-redux';
import { changeRandomMessage } from 'presentation/state//actions';

interface Props {
    message: string;
    changeMessage(): (message: string) => object;
}

const Component1 = (props: Props) => {
    return (
        <div>
            <h1>Component 1</h1>
            <p>{props.message}</p>
            <button onClick={props.changeMessage}>click</button>
        </div>
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
