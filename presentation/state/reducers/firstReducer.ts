/*eslint-disable no-unused-vars*/

import { ActionTypes } from '../../../domain/enums'
import { FirstComponentState } from '../../../domain/interfaces'

const initialState: FirstComponentState = {
  message: 'Some random message from redux state',
  myNumber: 0
};

interface Action {
  type: string;
  payload: any
}

const firstReducer = (state = initialState, action: Action): FirstComponentState => {
  const newState = { ...state };

  if (action.type === ActionTypes.CHANGE_MESSAGE) {
    return {
      ...newState,
      message: action.payload,
    };
  } else if (action.type === ActionTypes.INCREMENT_NUMBER) {
    const newNumber = newState.myNumber + action.payload

    return {
      ...newState,
      myNumber: newNumber
    }
  } else {
    return newState;
  }
};

export default firstReducer;
